const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const searchbar = document.querySelector('#search-bar');
const search = document.querySelector('.search-form');




menu.onclick = function() {
menu.classList.toggle('bx-x');
navbar.classList.toggle('open');



};


searchbar.onclick = function (){
search.classList.toggle('open');


};