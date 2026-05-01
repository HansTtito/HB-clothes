const PRODUCTS = [
  {
    id: 1,
    sku: "hb-hd-001",
    name: "HB Urban Hoodie",
    category: "Hoodies",
    condition: "Segunda mano seleccionada",
    price: 32990,
    description: "Hoodie urbana de USA en muy buen estado, ideal para uso diario.",
    sizes: ["S", "M", "L", "XL"],
    mainImage: "assets/products/hombre/hoodies/hb-hd-001-frente.jpg",
    images: ["assets/products/hombre/hoodies/hb-hd-001-frente.jpg", "assets/products/hombre/hoodies/hb-hd-001-espalda.jpg"]
  },
  {
    id: 2,
    sku: "hb-pan-001",
    name: "HB Cargo Pants",
    category: "Pantalones",
    condition: "Segunda mano seleccionada",
    price: 28990,
    description: "Pantalon cargo comodo y resistente con estilo streetwear.",
    sizes: ["28", "30", "32", "34", "36"],
    mainImage: "assets/products/hombre/pantalones/hb-pan-001-frente.jpg",
    images: ["assets/products/hombre/pantalones/hb-pan-001-frente.jpg"]
  },
  {
    id: 3,
    sku: "hb-pol-001",
    name: "HB Classic Tee",
    category: "Poleras",
    condition: "Nuevo",
    price: 15990,
    description: "Polera basica premium, corte comodo y facil de combinar.",
    sizes: ["S", "M", "L", "XL"],
    mainImage: "assets/products/unisex/poleras/hb-pol-001-frente.jpg",
    images: ["assets/products/unisex/poleras/hb-pol-001-frente.jpg", "assets/products/unisex/poleras/hb-pol-001-detalle-1.jpg"]
  },
  {
    id: 4,
    sku: "hb-cha-001",
    name: "HB Oversize Jacket",
    category: "Chaquetas",
    condition: "Segunda mano seleccionada",
    price: 45990,
    description: "Chaqueta oversize importada desde USA, abrigada y versatil.",
    sizes: ["S", "M", "L"],
    mainImage: "assets/products/mujer/chaquetas/hb-cha-001-frente.jpg",
    images: ["assets/products/mujer/chaquetas/hb-cha-001-frente.jpg"]
  },
  {
    id: 5,
    sku: "hb-sh-001",
    name: "HB Street Shorts",
    category: "Shorts",
    condition: "Nuevo",
    price: 19990,
    description: "Short de estilo urbano en excelente terminacion.",
    sizes: ["28", "30", "32", "34"],
    mainImage: "assets/products/hombre/shorts/hb-sh-001-frente.jpg",
    images: ["assets/products/hombre/shorts/hb-sh-001-frente.jpg"]
  },
  {
    id: 6,
    sku: "hb-acc-001",
    name: "HB Essential Cap",
    category: "Accesorios",
    condition: "Segunda mano seleccionada",
    price: 9990,
    description: "Gorra clasica original de USA, lista para uso.",
    sizes: ["Talla unica"],
    mainImage: "assets/products/unisex/accesorios/hb-acc-001-frente.jpg",
    images: ["assets/products/unisex/accesorios/hb-acc-001-frente.jpg"]
  },
  {
    id: 7,
    sku: "hb-int-001",
    name: "HB Bra USA",
    category: "Interior",
    condition: "Segunda mano seleccionada",
    price: 12990,
    description: "Prenda interior importada, revisada y en muy buen estado.",
    sizes: ["32A", "32B", "34A", "34B", "36B"],
    mainImage: "assets/products/mujer/interior/hb-int-001-frente.jpeg",
    images: ["assets/products/mujer/interior/hb-int-001-frente.jpeg","assets/products/mujer/interior/hb-int-001-espalda.jpeg"]
  }
];

function formatCLP(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  }).format(value);
}

function getImageUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;

  const cdn = typeof HB_CONFIG !== "undefined" ? HB_CONFIG.cdnBaseUrl : "";
  if (!cdn) return path;

  const cleanPath = path.replace(/^assets\//, "").replace(/^\//, "");
  return cdn.replace(/\/$/, "") + "/" + cleanPath;
}

function productCard(product) {
  const mainImageRaw = product.mainImage || (product.images && product.images.length > 0 ? product.images[0] : "");
  const mainImage = getImageUrl(mainImageRaw);
  const media = mainImage
    ? `<img class="card-image" src="${mainImage}" alt="${product.name}" loading="lazy" onerror="this.parentElement.innerHTML='Imagen pendiente';" />`
    : "Imagen pendiente";

  return `
    <article class="card">
      <div class="card-media">${media}</div>
      <div class="card-body">
        <p class="meta">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="meta">${product.condition}</p>
        <p class="price">${formatCLP(product.price)}</p>
        <div class="actions">
          <a class="btn btn-secondary" href="producto.html?id=${product.id}">Ver detalle</a>
          <button class="btn btn-primary" type="button" data-add-id="${product.id}">Agregar</button>
        </div>
      </div>
    </article>
  `;
}
