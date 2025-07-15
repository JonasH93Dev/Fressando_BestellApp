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
