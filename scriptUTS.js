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

/// Shopping cart
let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = () =>{
    shoppingcart.classList.toggle('active');
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}