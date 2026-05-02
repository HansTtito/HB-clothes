# HB Clothes - Backend

Backend en AWS Lambda + Mercado Pago + DynamoDB para HB Clothes.

## Estructura

- `src/createPreference.js`: Lambda que recibe el carrito y crea preferencia de pago en MP.
- `src/webhook.js`: Lambda que recibe notificaciones de MP y actualiza estado del pedido.
- `src/db.js`: Helpers de DynamoDB.

## Variables de entorno

- `MP_ACCESS_TOKEN`: token de Mercado Pago (TEST o produccion).
- `ALLOWED_ORIGIN`: dominio del frontend (Amplify) para CORS.
- `FRONTEND_URL`: URL completa del frontend para back_urls.
- `ORDERS_TABLE`: nombre de la tabla DynamoDB (default: `hb-clothes-orders`).
- `AWS_REGION`: region AWS (default: `us-east-1`).

## Pasos de deploy en AWS

### 1) Crear tabla DynamoDB

```powershell
aws dynamodb create-table `
  --table-name hb-clothes-orders `
  --attribute-definitions AttributeName=orderId,AttributeType=S `
  --key-schema AttributeName=orderId,KeyType=HASH `
  --billing-mode PAY_PER_REQUEST
```

### 2) Crear rol IAM para Lambda

Crear politica `hb-clothes-lambda-policy` con permisos:
- DynamoDB: PutItem, GetItem, UpdateItem en la tabla `hb-clothes-orders`.
- CloudWatch Logs.

Crear rol `hb-clothes-lambda-role` que asuma servicio `lambda.amazonaws.com` y adjuntar la politica anterior.

### 3) Instalar dependencias y empacar

Desde la carpeta `backend`:

```powershell
npm install
mkdir dist -ErrorAction SilentlyContinue
Compress-Archive -Path src/createPreference.js,src/db.js,node_modules -DestinationPath dist/createPreference.zip -Force
Compress-Archive -Path src/webhook.js,src/db.js,node_modules -DestinationPath dist/webhook.zip -Force
```

### 4) Crear Lambdas

Reemplaza `<ROLE_ARN>` con el ARN del rol creado, y completa `<MP_TOKEN>` y `<FRONTEND_URL>`.

```powershell
aws lambda create-function `
  --function-name hb-clothes-create-preference `
  --runtime nodejs20.x `
  --role <ROLE_ARN> `
  --handler createPreference.handler `
  --zip-file fileb://dist/createPreference.zip `
  --timeout 15 `
  --environment "Variables={MP_ACCESS_TOKEN=<MP_TOKEN>,ALLOWED_ORIGIN=<FRONTEND_URL>,FRONTEND_URL=<FRONTEND_URL>,ORDERS_TABLE=hb-clothes-orders}"

aws lambda create-function `
  --function-name hb-clothes-webhook `
  --runtime nodejs20.x `
  --role <ROLE_ARN> `
  --handler webhook.handler `
  --zip-file fileb://dist/webhook.zip `
  --timeout 15 `
  --environment "Variables={MP_ACCESS_TOKEN=<MP_TOKEN>,ORDERS_TABLE=hb-clothes-orders}"
```

### 5) Crear API Gateway (HTTP API)

Lo mas simple: AWS Console -> API Gateway -> Create API -> HTTP API.

- Nombre: `hb-clothes-api`
- Integraciones:
  - `POST /create-preference` -> Lambda `hb-clothes-create-preference`
  - `POST /webhook/mercadopago` -> Lambda `hb-clothes-webhook`
- CORS: permitir el dominio Amplify para `POST` y `OPTIONS`.

Al final tendras una URL tipo:
`https://abc123.execute-api.us-east-1.amazonaws.com`

### 6) Conectar el frontend

En `config.js` (raiz del proyecto):

```js
apiBaseUrl: "https://abc123.execute-api.us-east-1.amazonaws.com"
```

Commit + push -> Amplify redeploy automatico.

### 7) Configurar Webhook en Mercado Pago

En el panel de tu aplicacion MP -> Webhooks (Notificaciones) -> agregar URL:
`https://abc123.execute-api.us-east-1.amazonaws.com/webhook/mercadopago`

Eventos: `payment` (al menos).

### 8) Probar pago en modo TEST

1. Entrar a la tienda.
2. Agregar producto al carrito.
3. Ir al checkout, completar datos.
4. Click `Pagar con Mercado Pago`.
5. Pagar con tarjeta de prueba que entrega Mercado Pago.
6. Verificar que el pedido se actualiza en DynamoDB con estado `approved`.

### 9) Pasar a produccion

- Cambiar `MP_ACCESS_TOKEN` por la credencial de produccion (`APP_USR-...`) en las dos Lambdas.
- Validar con un pago real chico.
