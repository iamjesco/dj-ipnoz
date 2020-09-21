// ---------------------------------------------------	
// 		FUNCTION TO MAKE ACTIVE STATE TO NAVIGATION
// ---------------------------------------------------

// Get the container element
var btnContainer = document.getElementById("navigation__list");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("navigation__list__item");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// ---------------------------------------------------	
// 		HOME SLIDESHOW
// ---------------------------------------------------

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("home__slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}




// Call the scrollchange function when the user scrolls
// window.addEventListener('scroll', function () {
// 	scrollChange();
// });

window.onscroll = function() {
  scrollFunction();
};

// function scrollChange() {
// 	const header = document.getElementById('header');
// 	// Add the class 'fade-in' after scrolling to more than 50
// 	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
// 		header.classList.add('fade-in');
// 		// Remove the class 'fade-in' after scrolling to less than 50
// 	}else {
// 		header.classList.remove('fade-in');
// 	}
// }

const parallax = document.getElementById('home');

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -.4 + "px";
  // console.log(`offset: ${offset}`);
  // console.log(`offset * 0.7: ${offset * 0.7}`);
})


// ---------------------------------------------------	
// 		FUNCTIONS TO ACTIVATE BURGER MENU
// ---------------------------------------------------

const bars = document.getElementById("bars");
const times = document.getElementById("times");
const navigation = document.getElementById("navigation__list__mobile");

bars.addEventListener("click", openNav);
times.addEventListener("click", closeNav);

function openNav() {
  bars.style.cssText = "animation: rotate-ccw-out .5s forwards;";
  times.style.cssText = "animation: rotate-ccw-in .5s forwards;";
  navigation.style.cssText = "animation: slide-in .5s forwards;";
}

function closeNav() {
  times.style.cssText = "animation: rotate-cw-out .5s forwards;";
  bars.style.cssText = "animation: rotate-cw-in .5s forwards;";
  navigation.style.cssText = "animation: slide-out .5s forwards;";
}

// ---------------------------------------------------	
// 		FUNCTION TO MAKE SCROLLUP BTN APPEAR
// ---------------------------------------------------

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollUp").style.display = "block";
  } else {
    document.getElementById("scrollUp").style.display = "none";
  }
}

