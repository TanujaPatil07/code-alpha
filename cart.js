function addToOrders(name, price) {
  const order = {
    name: name,
    price: price,
    date: new Date().toLocaleString()
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  alert("✅ Product added to orders!");
}
