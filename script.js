function renderMenu() {
  let mealsContainer = document.getElementById("meals");
  mealsContainer.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    let meal = menu[i];
    mealsContainer.innerHTML += getMealTemplate(meal); // ← von template.js
  }
}

window.onload = function () {
  renderMenu();
};
