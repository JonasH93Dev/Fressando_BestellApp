function getMealTemplate(name, description, price, index) {
  return `
    <div class="meal">
      <div class="meal-title">${name}</div>
      <div class="meal-desc">${description}</div>
      <div class="meal-bottom">
        <div class="meal-price">${price.toFixed(2).replace(".", ",")} €</div>
        <button onclick="addToCart(${index})" class="round-btn add-btn">+</button>
      </div>
    </div>
  `;
}


function getCartItemTemplate(name, price, quantity, index) {
  let total = (price * quantity).toFixed(2).replace(".", ",");
  return `
    <div class="cart-item">
      <div class="item-info">
        <span>${quantity}x ${name}</span>
        <span>${total} €</span>
      </div>
      <div class="item-actions">
        <button onclick="decreaseQuantity(${index})" class="round-btn">−</button>
        <button onclick="increaseQuantity(${index})" class="round-btn">+</button>
        <button onclick="removeFromCart(${index})" class="delete-btn round-btn">🗑️</button>
      </div>
    </div>
  `;
}

function getCartTotalTemplate(total) {
  return `
    <div class="cart-total">
      <strong>Gesamt: ${total.toFixed(2).replace(".", ",")} €</strong>
    </div>
    <button class="order-button" onclick="placeOrder()">Bestellen</button>
  `;
}

function getOrderSuccessTemplate() {
  return `
    <div class="order-success">
      🎉 Vielen Dank für deine Bestellung!
    </div>
  `;
}

function getRatingTemplate(starsHTML, reviews) {
  return `
    <div class="rating">
      <div class="stars">${starsHTML}</div>
      <span class="review-count">${reviews.toLocaleString()} Bewertungen</span>
    </div>
  `;
}
