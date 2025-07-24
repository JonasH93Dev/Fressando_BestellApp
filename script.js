let menus = [];
let prices = [];
let amounts = [];
const basket = document.getElementById("basket");
const overlay = document.getElementById("overlay");

function initMenus() {
  menus = [];
  prices = [];
  amounts = [];
  for (let i = 0; i < menu.length; i++) {
    menus.push(menu[i].name);
    prices.push(menu[i].price);
    amounts.push(0);
  }
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
  let { total, totalCount, hasItems } = renderCartItems(cartBox);
  if (!hasItems) {
    cartBox.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
  } else {
    cartBox.innerHTML += getCartTotalTemplate(total);
  }
  updateCartCount(totalCount);
}

function renderCartItems(cartBox) {
  let total = 0;
  let totalCount = 0;
  let hasItems = false;
  for (let i = 0; i < menus.length; i++) {
    if (amounts[i] > 0) {
      cartBox.innerHTML += getCartItemTemplate(menus[i], prices[i], amounts[i], i);
      total += prices[i] * amounts[i];
      totalCount += amounts[i];
      hasItems = true;
    }
  }
  return { total, totalCount, hasItems };
}

function updateCartCount(totalCount) {
  let cartCountEl = document.getElementById("cartCount");
  if (totalCount > 0) {
    cartCountEl.style.display = "inline";
    cartCountEl.textContent = totalCount;
  } else {
    cartCountEl.style.display = "none";
  }
}


function saveCart() {
  localStorage.setItem("amounts", JSON.stringify(amounts));
}

function loadCart() {
  let stored = localStorage.getItem("amounts");
  if (stored) {
    amounts = JSON.parse(stored);
  }
}

function placeOrder() {
  if (amounts.every(amount => amount === 0)) return;
  showOrderMessage();
  for (let i = 0; i < amounts.length; i++) {
    amounts[i] = 0;
  }
  saveCart();
  renderCart();
}

function showOrderMessage() {
  let msgBox = document.getElementById("orderMessage");
  msgBox.classList.remove("hidden");
  msgBox.classList.add("show");
  setTimeout(() => {
    msgBox.classList.remove("show");
    msgBox.classList.add("hidden");
  }, 3000);
}

document.getElementById("cartToggle").addEventListener("click", () => {
  if (window.innerWidth <= 500) {
    basket.classList.add("mobile");
    basket.classList.add("open");
    overlay.classList.remove("hidden");
  }
});

document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

function closeCart() {
  basket.classList.remove("open");
  overlay.classList.add("hidden");
}

window.onload = function () {
  initMenus();
  loadCart();
  renderMenu();
  renderCart();
};
