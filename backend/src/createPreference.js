const { MercadoPagoConfig, Preference } = require("mercadopago");
const { randomUUID } = require("crypto");
const { createOrder } = require("./db");

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const FRONTEND_URL = process.env.FRONTEND_URL || "";
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || "";
const WEBHOOK_URL = process.env.WEBHOOK_URL || "";

const mpClient = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN });
const preferenceClient = new Preference(mpClient);

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Content-Type": "application/json"
};

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: corsHeaders,
    body: JSON.stringify(body)
  };
}

exports.handler = async (event) => {
  if (event.requestContext && event.requestContext.http && event.requestContext.http.method === "OPTIONS") {
    return jsonResponse(200, { ok: true });
  }

  if (!MP_ACCESS_TOKEN) {
    return jsonResponse(500, { error: "MP_ACCESS_TOKEN no configurado" });
  }

  try {
    const payload = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
    if (!payload || !Array.isArray(payload.items) || payload.items.length === 0) {
      return jsonResponse(400, { error: "Carrito vacio o invalido" });
    }

    const orderId = randomUUID();
    const createdAt = new Date().toISOString();

    const mpItems = payload.items.map((item) => ({
      id: String(item.sku || item.productId),
      title: item.name + (item.size ? " (Talla " + item.size + ")" : ""),
      quantity: Number(item.quantity) || 1,
      unit_price: Number(item.unitPrice) || 0,
      currency_id: payload.currency || "CLP"
    }));

    if (payload.shipping && payload.shipping > 0) {
      mpItems.push({
        id: "shipping",
        title: "Envio en Santiago",
        quantity: 1,
        unit_price: Number(payload.shipping),
        currency_id: payload.currency || "CLP"
      });
    }

    const preferenceBody = {
      items: mpItems,
      external_reference: orderId,
      back_urls: FRONTEND_URL
        ? {
            success: FRONTEND_URL + "/success.html?orderId=" + orderId,
            failure: FRONTEND_URL + "/failure.html?orderId=" + orderId,
            pending: FRONTEND_URL + "/pending.html?orderId=" + orderId
          }
        : undefined,
      auto_return: "approved",
      payer: payload.customer
        ? {
            name: payload.customer.name,
            email: payload.customer.email,
            phone: payload.customer.phone ? { number: payload.customer.phone } : undefined,
            address: payload.customer.address ? { street_name: payload.customer.address } : undefined
          }
        : undefined,
      metadata: { orderId: orderId, brand: "HB clothes" },
      notification_url: WEBHOOK_URL || undefined
    };

    const preference = await preferenceClient.create({ body: preferenceBody });

    await createOrder({
      orderId: orderId,
      status: "pending",
      mpPreferenceId: preference.id,
      mpPaymentId: null,
      customer: payload.customer || null,
      items: payload.items,
      subtotal: payload.subtotal,
      shipping: payload.shipping,
      total: payload.total,
      currency: payload.currency || "CLP",
      createdAt: createdAt,
      updatedAt: createdAt
    });

    return jsonResponse(200, {
      orderId: orderId,
      preferenceId: preference.id,
      init_point: preference.init_point,
      sandbox_init_point: preference.sandbox_init_point
    });
  } catch (error) {
    console.error("createPreference error", error);
    return jsonResponse(500, { error: error.message || "Error creando preferencia" });
  }
};
