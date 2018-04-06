var toggle = document.getElementById('menuToggle');
var menu = document.getElementById('menu');

toggle.addEventListener('click', function(){
  if (menu.classList.contains('active')){
    menu.classList = '';
  } else {
    menu.classList.add('active');
  }
  console.log(menu.style.height)
})