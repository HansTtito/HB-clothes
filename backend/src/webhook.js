const { MercadoPagoConfig, Payment } = require("mercadopago");
const { updateOrderStatus } = require("./db");

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

    if (topic !== "payment" || !dataId) {
      return { statusCode: 200, body: JSON.stringify({ ignored: true }) };
    }

    const payment = await paymentClient.get({ id: dataId });
    if (!payment) {
      return { statusCode: 200, body: JSON.stringify({ ignored: true }) };
    }

    const orderId = payment.external_reference;
    if (!orderId) {
      return { statusCode: 200, body: JSON.stringify({ ignored: true }) };
    }

    const status = mapStatus(payment.status);
    await updateOrderStatus(orderId, status, String(payment.id));

    return { statusCode: 200, body: JSON.stringify({ ok: true, orderId: orderId, status: status }) };
  } catch (error) {
    console.error("webhook error", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message || "webhook error" }) };
  }
};
