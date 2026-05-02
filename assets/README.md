# Assets HB Clothes

Estructura base para mantener ordenadas imagenes de marca y productos.

## Estructura

- `brand/`: logo, favicon e identidad visual.
- `banners/`: imagenes de portada para home y secciones.
- `placeholders/`: imagenes temporales para productos sin foto final.
- `products/`: catalogo por segmento y tipo de prenda.

## Convencion de nombres

Usar nombre de archivo con SKU y vista:

- `sku-frente.jpg`
- `sku-espalda.jpg`
- `sku-detalle-1.jpg`
- `sku-detalle-2.jpg`

Ejemplo:

- `hb-pol-001-frente.jpg`
- `hb-pol-001-espalda.jpg`
- `hb-pol-001-detalle-1.jpg`

## Recomendacion tecnica

- Formato: `jpg` para fotos, `png` para transparencias, `svg` para logos.
- Peso recomendado por imagen de producto: 150 KB a 400 KB.
- Mantener el mismo SKU en todas las vistas del mismo producto.
