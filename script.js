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
  
  let existing = cart.find(item => item.meal.name === meal.name);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ meal: meal, quantity: 1 });
  }

  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function loadCart() {
  let savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

function renderCart() {
  let cartBox = document.querySelector("#basket .cart-content");
  cartBox.innerHTML = "";

  if (cart.length === 0) {
    cartBox.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
    return;
  }

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.meal.price * item.quantity;
    cartBox.innerHTML += getCartItemTemplate(item, i);
  }

  cartBox.innerHTML += getCartTotalTemplate(total);

  saveCart();
}

window.onload = function () {
  loadCart(); 
  renderMenu(); 
  renderCart(); 
};

