const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, UpdateCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");

const REGION = process.env.AWS_REGION || "us-east-1";
const ORDERS_TABLE = process.env.ORDERS_TABLE || "hb-clothes-orders";

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }));

async function createOrder(order) {
  await dynamo.send(
    new PutCommand({
      TableName: ORDERS_TABLE,
      Item: order
    })
  );
}

async function getOrder(orderId) {
  const result = await dynamo.send(
    new GetCommand({
      TableName: ORDERS_TABLE,
      Key: { orderId: orderId }
    })
  );
  return result.Item || null;
}

async function updateOrderStatus(orderId, status, mpPaymentId) {
  await dynamo.send(
    new UpdateCommand({
      TableName: ORDERS_TABLE,
      Key: { orderId: orderId },
      UpdateExpression: "SET #s = :status, mpPaymentId = :mpPaymentId, updatedAt = :updatedAt",
      ExpressionAttributeNames: { "#s": "status" },
      ExpressionAttributeValues: {
        ":status": status,
        ":mpPaymentId": mpPaymentId || null,
        ":updatedAt": new Date().toISOString()
      }
    })
  );
}

module.exports = { createOrder, getOrder, updateOrderStatus };
