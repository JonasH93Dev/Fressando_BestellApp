function getMealTemplate(meal, index) {
  return `
    <div class="meal">
      <div class="meal-title">${meal.name}</div>
      <div class="meal-desc">${meal.description}</div>
      <div class="meal-bottom">
        <div class="meal-price">${meal.price.toFixed(2).replace(".", ",")} €</div>
        <div class="meal-add" onclick="addToCart(${index})">+</div>
      </div>
    </div>
  `;
}

function getCartItemTemplate(item) {
  return `
    <div class="cart-item">
      <span>${item.name}</span>
      <span>${item.price.toFixed(2).replace(".", ",")} €</span>
    </div>
  `;
}

function getCartItemTemplate(item, index) {
  let subtotal = item.meal.price * item.quantity;
  return `
    <div class="cart-item">
      <span>${item.quantity}x ${item.meal.name}</span>
      <span>${subtotal.toFixed(2).replace(".", ",")} €</span>
      <div class="quantity-controls">
        <button onclick="decreaseQuantity(${index})">➖</button>
        <button onclick="increaseQuantity(${index})">➕</button>
        <button onclick="removeFromCart(${index})">🗑️</button>
      </div>
    </div>
  `;
}


function getCartTotalTemplate(total) {
  return `
    <div class="cart-total">
      <strong>Gesamt:</strong> ${total.toFixed(2).replace(".", ",")} €
    </div>
    <button onclick="placeOrder()" class="order-button">Jetzt bestellen</button>
  `;
}

function getOrderSuccessTemplate() {
  return `
    <div class="order-success">
      🎉 Vielen Dank für deine Bestellung!
    </div>
  `;
}

