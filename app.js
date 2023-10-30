const navBar = document.querySelector('.navBar');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const pf = document.querySelector('#pf');
const abt= document.querySelector('#abt');
const cont = document.querySelector('#cont');


function show() {
  closeMenu.style.display="block";
  openMenu.style.display="none";
  navBar.style.display = 'flex';
  navBar.style.top = '0';
}
function close() {
  navBar.style.top = '-100%';
  openMenu.style.display="block";
  closeMenu.style.display="none";
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
pf.addEventListener('click', close);
abt.addEventListener('click', close);
cont.addEventListener('click', close);

