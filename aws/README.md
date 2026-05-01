# HB clothes - infraestructura AWS

Archivos de configuracion para crear el bucket S3 que alojara las fotos de productos.

## Bucket

- Nombre sugerido: `hb-clothes-assets`
- Region sugerida: `us-east-1`
- Acceso: lectura publica solo para imagenes de productos.

## Archivos

- `s3-bucket-policy.json`: politica de lectura publica.
- `s3-cors.json`: configuracion CORS para servir imagenes desde el frontend.

## Notas

- Si cambias el nombre del bucket, actualiza el ARN dentro de `s3-bucket-policy.json`.
- Si luego conectas un dominio (ej: `cdn.hbclothes.cl`), reemplaza `AllowedOrigins`
  por la lista exacta de dominios permitidos.
