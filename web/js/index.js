var toggle = document.getElementById('menuToggle');
var menu = document.getElementById('menu');

toggle.addEventListener('click', function () {
  if (menu.classList.contains('active')) {
    menu.classList = '';
  } else {
    menu.classList.add('active');
  }
  console.log(menu.style.height)
})


/**
 * Slideshow / Carousel
 */
var slideIndex = 1;
showSlides(slideIndex);

// 重複輪播
loop();
function loop() { setTimeout(function () { showSlides(slideIndex += 1); loop() }, 3500); }

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot-active";
}
