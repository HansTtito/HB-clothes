const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const REGION = process.env.AWS_REGION || "us-east-1";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";
const FROM_EMAIL = process.env.FROM_EMAIL || ADMIN_EMAIL;

const sesClient = new SESClient({ region: REGION });

function formatCLP(value) {
  if (value == null) return "-";
  const n = Number(value);
  return "$" + n.toLocaleString("es-CL");
}

function buildItemsHtml(items) {
  if (!Array.isArray(items) || items.length === 0) return "<p>Sin items</p>";
  const rows = items.map(function (it) {
    const size = it.size ? " - Talla " + it.size : "";
    return (
      "<tr>" +
      "<td style='padding:6px 8px;border-bottom:1px solid #eee;'>" + (it.name || it.sku || "Producto") + size + "</td>" +
      "<td style='padding:6px 8px;border-bottom:1px solid #eee;text-align:center;'>" + (it.quantity || 1) + "</td>" +
      "<td style='padding:6px 8px;border-bottom:1px solid #eee;text-align:right;'>" + formatCLP(it.unitPrice) + "</td>" +
      "</tr>"
    );
  }).join("");
  return (
    "<table style='border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;'>" +
    "<thead><tr><th style='text-align:left;padding:6px 8px;background:#f7f7f7;'>Producto</th>" +
    "<th style='text-align:center;padding:6px 8px;background:#f7f7f7;'>Cant.</th>" +
    "<th style='text-align:right;padding:6px 8px;background:#f7f7f7;'>Precio</th></tr></thead>" +
    "<tbody>" + rows + "</tbody></table>"
  );
}

function shippingDescriptor(order) {
  const method = order.shippingMethod || "home";
  const label = order.shippingLabel || (method === "metro" ? "Retiro en estacion de metro" : "Despacho a domicilio (Santiago)");
  const icon = method === "metro" ? "[METRO]" : "[DOMICILIO]";
  return { method: method, label: label, icon: icon };
}

function buildEmailHtml(order) {
  const customer = order.customer || {};
  const itemsHtml = buildItemsHtml(order.items || []);
  const ship = shippingDescriptor(order);
  const addressOrStation = ship.method === "metro" ? "Estacion preferida" : "Direccion";
  const shipColor = ship.method === "metro" ? "#b89766" : "#1a1a1a";

  return (
    "<div style='font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto;'>" +
    "<h2 style='color:#000;'>Nueva venta confirmada - HB Clothes</h2>" +
    "<p><strong>Order ID:</strong> " + order.orderId + "</p>" +
    "<p><strong>MP Payment ID:</strong> " + (order.mpPaymentId || "-") + "</p>" +
    "<p><strong>Estado:</strong> " + order.status + "</p>" +
    "<p><strong>Fecha:</strong> " + (order.updatedAt || order.createdAt || new Date().toISOString()) + "</p>" +
    "<div style='margin-top:16px;padding:10px 14px;border-left:4px solid " + shipColor + ";background:#faf8f3;'>" +
    "<p style='margin:0;font-size:15px;'><strong>Metodo de envio:</strong> " + ship.icon + " " + ship.label + "</p>" +
    (ship.method === "metro"
      ? "<p style='margin:6px 0 0;font-size:13px;color:#555;'>Coordina con el cliente la estacion y horario por WhatsApp.</p>"
      : "<p style='margin:6px 0 0;font-size:13px;color:#555;'>Coordina dia y horario de despacho con el cliente por WhatsApp.</p>") +
    "</div>" +
    "<h3 style='margin-top:24px;'>Cliente</h3>" +
    "<p>" +
    "<strong>" + (customer.name || "-") + "</strong><br>" +
    "Email: " + (customer.email || "-") + "<br>" +
    "Telefono: " + (customer.phone || "-") + "<br>" +
    addressOrStation + ": " + (customer.address || "-") +
    "</p>" +
    "<h3 style='margin-top:24px;'>Productos</h3>" +
    itemsHtml +
    "<h3 style='margin-top:24px;'>Totales</h3>" +
    "<p>" +
    "Subtotal: " + formatCLP(order.subtotal) + "<br>" +
    "Envio (" + ship.label + "): " + formatCLP(order.shipping) + "<br>" +
    "<strong>Total: " + formatCLP(order.total) + "</strong>" +
    "</p>" +
    "<hr style='margin-top:32px;border:none;border-top:1px solid #eee;'>" +
    "<p style='font-size:12px;color:#888;'>Notificacion automatica de HB Clothes. Coordina la entrega con el cliente por WhatsApp o email.</p>" +
    "</div>"
  );
}

function buildEmailText(order) {
  const customer = order.customer || {};
  const ship = shippingDescriptor(order);
  const addressOrStation = ship.method === "metro" ? "Estacion preferida" : "Direccion";
  const items = (order.items || []).map(function (it) {
    const size = it.size ? " (talla " + it.size + ")" : "";
    return "- " + (it.name || it.sku) + size + " x" + (it.quantity || 1) + " " + formatCLP(it.unitPrice);
  }).join("\n");

  return [
    "Nueva venta confirmada - HB Clothes",
    "",
    "Order ID: " + order.orderId,
    "MP Payment ID: " + (order.mpPaymentId || "-"),
    "Estado: " + order.status,
    "",
    "Metodo de envio: " + ship.icon + " " + ship.label,
    (ship.method === "metro"
      ? "  -> Coordina estacion y horario por WhatsApp."
      : "  -> Coordina dia y horario de despacho por WhatsApp."),
    "",
    "Cliente:",
    "Nombre: " + (customer.name || "-"),
    "Email: " + (customer.email || "-"),
    "Telefono: " + (customer.phone || "-"),
    addressOrStation + ": " + (customer.address || "-"),
    "",
    "Productos:",
    items || "(sin items)",
    "",
    "Subtotal: " + formatCLP(order.subtotal),
    "Envio (" + ship.label + "): " + formatCLP(order.shipping),
    "Total: " + formatCLP(order.total)
  ].join("\n");
}

async function sendOrderApprovedEmail(order) {
  if (!ADMIN_EMAIL) {
    console.warn("ADMIN_EMAIL no configurado, no se envia email");
    return;
  }

  const ship = shippingDescriptor(order);
  const subject = "HB Clothes " + ship.icon + " | Venta " + (order.customer && order.customer.name ? order.customer.name : "") + " - " + formatCLP(order.total);

  const command = new SendEmailCommand({
    Source: FROM_EMAIL,
    Destination: { ToAddresses: [ADMIN_EMAIL] },
    Message: {
      Subject: { Data: subject, Charset: "UTF-8" },
      Body: {
        Html: { Data: buildEmailHtml(order), Charset: "UTF-8" },
        Text: { Data: buildEmailText(order), Charset: "UTF-8" }
      }
    }
  });

  try {
    const result = await sesClient.send(command);
    console.log("email enviado", result.MessageId);
  } catch (error) {
    console.error("error enviando email", error);
  }
}

module.exports = { sendOrderApprovedEmail };
