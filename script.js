let menus = [];
let prices = [];
let amounts = [];

for (let i = 0; i < menu.length; i++) {
  menus.push(menu[i].name);
  prices.push(menu[i].price);
  amounts.push(0);
}

function addToCart(index) {
  amounts[index]++;
  renderCart();
  saveCart();
}

function increaseQuantity(index) {
  amounts[index]++;
  renderCart();
  saveCart();
}

function decreaseQuantity(index) {
  amounts[index]--;
  if (amounts[index] < 0) amounts[index] = 0;
  renderCart();
  saveCart();
}

function removeFromCart(index) {
  amounts[index] = 0;
  renderCart();
  saveCart();
}

function renderMenu() {
  let mealsContainer = document.getElementById("meals");
  mealsContainer.innerHTML = "";
  for (let i = 0; i < menus.length; i++) {
    mealsContainer.innerHTML += getMealTemplate(menus[i], menu[i].description, prices[i], i);
  }
}

function renderCart() {
  let cartBox = document.querySelector("#basket .cart-content");
  cartBox.innerHTML = "";
  let total = 0;
  let hasItems = false;

  for (let i = 0; i < menus.length; i++) {
    if (amounts[i] > 0) {
      cartBox.innerHTML += getCartItemTemplate(menus[i], prices[i], amounts[i], i);
      total += prices[i] * amounts[i];
      hasItems = true;
    }
  }

  if (!hasItems) {
    cartBox.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
  } else {
    cartBox.innerHTML += getCartTotalTemplate(total);
  }
}

function saveCart() {
  localStorage.setItem("amounts", JSON.stringify(amounts));
}

function loadCart() {
  let stored = localStorage.getItem("amounts");
  if (stored) amounts = JSON.parse(stored);
}

function placeOrder() {
  if (amounts.every(amount => amount === 0)) return;
  showOrderMessage();
  for (let i = 0; i < amounts.length; i++) amounts[i] = 0;
  saveCart();
  renderCart();
}

function showOrderMessage() {
  let msgBox = document.getElementById("orderMessage");
  msgBox.innerHTML = getOrderSuccessTemplate();
  setTimeout(() => msgBox.innerHTML = "", 4000);
}

function renderRating(rating, reviews) {
  let fullStars = Math.floor(rating);
  let hasHalfStar = rating % 1 >= 0.5;
  let emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) starsHTML += `<span class="star full">★</span>`;
  if (hasHalfStar) starsHTML += `<span class="star half">★</span>`;
  for (let i = 0; i < emptyStars; i++) starsHTML += `<span class="star empty">★</span>`;

  document.getElementById("ratingContainer").innerHTML = getRatingTemplate(starsHTML, reviews);
}

window.onload = function () {
  loadCart();
  renderMenu();
  renderCart();
  renderRating(0.5, 249125);
};
