const btnHamburger = document.querySelector('#navbarNav');
const fadeElems = document.querySelectorAll('.has-fade');
const overlay = document.querySelector('#overlay')

navbarNav.addEventListener('click', function(){
console.log('open hamburger');

if(navbarNav.classList.contains('open')){
    navbarNav.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
}
else {
    navbarNav.classList.add('open');
    fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
  });

}
});