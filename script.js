function goToCategory(category) {
  localStorage.setItem("category", category);
  window.location.href = "products.html";
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.getElementById("cartCount");
  if (badge) {
    badge.innerText = cart.length;
  }
}

// update cart count on every page load
updateCartCount();
