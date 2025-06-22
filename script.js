document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Phone", price: 499 },
    { id: 2, name: "Laptop", price: 999 }
  ];

  const list = document.getElementById("product-list");
  const cartCount = document.getElementById("cart-count");

  // Load cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Update cart count in UI
  function updateCartDisplay() {
    cartCount.innerText = cart.length;
  }

  // Add to cart function
  window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    if (product) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
      alert(`${product.name} added to cart!`);
    }
  };

  // Render products
  products.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });

  updateCartDisplay(); // Initial cart count
});
