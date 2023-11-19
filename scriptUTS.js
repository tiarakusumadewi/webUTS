// responsive sidebar menu 
  
const menu = document.querySelector('.navbar #hamburger-menu'); 
const nav = document.querySelector('.navbar .navbar-nav'); 
 
menu.addEventListener('click', function() { 
    nav.classList.toggle('active') 
}); 

const hamburger = document.querySelector('#hamburger-menu'); 
document.addEventListener('click', function(e){ 
  if(!hamburger.contains(e.target) && !nav.contains(e.target)) { 
    nav.classList.remove('active')
  }
});

  
// Shoping cart
if (!shoppingCart.contains(e.target) && !shoppingcart.contains(e.target)) {
  shoppingcart.classList.remove('active');
}

//Class Active Shopping Cart
const shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
shoppingcart.classList.toogle('active');
e.preventDefault();
};

// Klik diluar elemen
const shoppingCart = document.querySelector ('#shopping-cart-button');

