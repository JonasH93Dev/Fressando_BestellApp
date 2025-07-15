function renderMenu() {
  let mealsContainer = document.getElementById("meals");
  mealsContainer.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    let meal = menu[i];
    mealsContainer.innerHTML += getMealTemplate(meal, i); 
  }
}


window.onload = function () {
  renderMenu();
};

let cart = [];

function addToCart(index) {
  let meal = menu[index]; 
  cart.push(meal); 
  renderCart(); 
}


function renderCart() {
  let cartBox = document.querySelector("#basket .cart-content");
  cartBox.innerHTML = "";

  if (cart.length === 0) {
    cartBox.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    cartBox.innerHTML += getCartItemTemplate(item);
  }
}
