const CART_STORAGE_KEY = "hb_clothes_cart_v1";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartCount();
}

function findCartIndex(cart, productId, size) {
  return cart.findIndex(function (item) {
    return item.productId === productId && item.size === size;
  });
}

function addToCart(productId, size, quantity) {
  const safeQuantity = quantity && quantity > 0 ? quantity : 1;
  const cart = getCart();
  const existingIndex = findCartIndex(cart, productId, size);

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += safeQuantity;
  } else {
    cart.push({ productId: productId, size: size || null, quantity: safeQuantity });
  }

  saveCart(cart);
  showToast("Agregado al carrito");
}

function removeFromCart(productId, size) {
  const cart = getCart().filter(function (item) {
    return !(item.productId === productId && item.size === size);
  });
  saveCart(cart);
}

function updateCartQuantity(productId, size, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId, size);
    return;
  }
  const cart = getCart();
  const existingIndex = findCartIndex(cart, productId, size);
  if (existingIndex >= 0) {
    cart[existingIndex].quantity = quantity;
    saveCart(cart);
  }
}

function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  updateCartCount();
}

function getCartDetailed() {
  const cart = getCart();
  return cart
    .map(function (item) {
      const product = typeof PRODUCTS !== "undefined" ? PRODUCTS.find(function (p) { return p.id === item.productId; }) : null;
      if (!product) return null;
      return {
        productId: item.productId,
        size: item.size,
        quantity: item.quantity,
        product: product,
        subtotal: product.price * item.quantity
      };
    })
    .filter(Boolean);
}

function getCartTotals() {
  const items = getCartDetailed();
  const subtotal = items.reduce(function (sum, item) { return sum + item.subtotal; }, 0);
  const shipping = items.length > 0 ? (typeof HB_CONFIG !== "undefined" ? HB_CONFIG.shippingCost : 0) : 0;
  const total = subtotal + shipping;
  const itemCount = items.reduce(function (sum, item) { return sum + item.quantity; }, 0);
  return { items: items, subtotal: subtotal, shipping: shipping, total: total, itemCount: itemCount };
}

function updateCartCount() {
  const count = getCart().reduce(function (sum, item) { return sum + item.quantity; }, 0);
  document.querySelectorAll("[data-cart-count]").forEach(function (element) {
    element.textContent = count > 0 ? "(" + count + ")" : "";
  });
}

function showToast(message) {
  let toast = document.getElementById("hb-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "hb-toast";
    toast.className = "hb-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("hb-toast-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(function () {
    toast.classList.remove("hb-toast-visible");
  }, 1800);
}

document.addEventListener("DOMContentLoaded", updateCartCount);
