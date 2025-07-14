function getMealTemplate(meal) {
  return `
    <div class="meal">
      <div class="meal-title">${meal.name}</div>
      <div class="meal-desc">${meal.description}</div>
      <div class="meal-bottom">
        <div class="meal-price">${meal.price.toFixed(2).replace(".", ",")} €</div>
        <div class="meal-add">+</div>
      </div>
    </div>
  `;
}
