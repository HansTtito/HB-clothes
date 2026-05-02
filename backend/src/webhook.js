const { MercadoPagoConfig, Payment } = require("mercadopago");
const { updateOrderStatus, getOrder } = require("./db");
const { sendOrderApprovedEmail } = require("./notify");

const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || "";

const mpClient = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN });
const paymentClient = new Payment(mpClient);

function mapStatus(mpStatus) {
  if (mpStatus === "approved") return "approved";
  if (mpStatus === "rejected" || mpStatus === "cancelled") return "rejected";
  return "pending";
}

exports.handler = async (event) => {
  try {
    const payload = typeof event.body === "string" ? JSON.parse(event.body || "{}") : event.body || {};
    const queryParams = event.queryStringParameters || {};

    const topic = payload.type || queryParams.type || queryParams.topic;
    const dataId = (payload.data && payload.data.id) || queryParams["data.id"] || queryParams.id;

    console.log("webhook received", { topic, dataId, payload });

    if (topic !== "payment" || !dataId) {
      return { statusCode: 200, body: JSON.stringify({ ignored: true, reason: "topic or id missing" }) };
    }

    let payment = null;
    try {
      payment = await paymentClient.get({ id: dataId });
    } catch (mpError) {
      console.warn("payment fetch failed", mpError && mpError.message);
      return { statusCode: 200, body: JSON.stringify({ ignored: true, reason: "payment not found" }) };
    }

    if (!payment) {
      return { statusCode: 200, body: JSON.stringify({ ignored: true, reason: "no payment data" }) };
    }

    const orderId = payment.external_reference;
    if (!orderId) {
      return { statusCode: 200, body: JSON.stringify({ ignored: true, reason: "no external_reference" }) };
    }

    const status = mapStatus(payment.status);
    try {
      await updateOrderStatus(orderId, status, String(payment.id));
    } catch (dbError) {
      console.error("dynamodb update failed", dbError);
      return { statusCode: 200, body: JSON.stringify({ ignored: true, reason: "order not found in db" }) };
    }

    if (status === "approved") {
      try {
        const order = await getOrder(orderId);
        if (order) {
          await sendOrderApprovedEmail(order);
        }
      } catch (notifyError) {
        console.error("notify failed", notifyError);
      }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, orderId: orderId, status: status }) };
  } catch (error) {
    console.error("webhook error", error);
    return { statusCode: 200, body: JSON.stringify({ ignored: true, reason: "internal error caught" }) };
  }
};
