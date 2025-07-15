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

function getCartItemTemplate(item, i) {
  let subtotal = item.meal.price * item.quantity;
  return `
    <div class="cart-item">
      <span>${item.quantity}x ${item.meal.name}</span>
      <span>${subtotal.toFixed(2).replace(".", ",")} €</span>
      <button onclick="removeFromCart(${i})">🗑️</button>
    </div>
  `;
}

function getCartTotalTemplate(total) {
  return `
    <div class="cart-total">
      <strong>Gesamt:</strong> ${total.toFixed(2).replace(".", ",")} €
    </div>
  `;
}

