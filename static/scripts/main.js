// Call the scrollchange function when the user scrolls
window.addEventListener('scroll', function () {
	scrollChange();
});


function scrollChange() {
	const header = document.getElementById('header');
	// Add the class 'fade-in' after scrolling to more than 50
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		header.classList.add('fade-in');
		// Remove the class 'fade-in' after scrolling to less than 50
	}else {
		header.classList.remove('fade-in');
	}
}

const parallax = document.getElementById('home');

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -.4 + "px";
  // console.log(`offset: ${offset}`);
  // console.log(`offset * 0.7: ${offset * 0.7}`);
})