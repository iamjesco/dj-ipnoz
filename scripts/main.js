// Call the scrollchange function when the user scrolls
window.addEventListener('scroll', function () {
	scrollChange();
});


function scrollChange() {
	const header = document.getElementById('nav');
	// Add the class 'fade-in' after scrolling to more than 50
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		header.classList.add('fade-in');
		// Remove the class 'fade-in' after scrolling to less than 50
	}else {
		header.classList.remove('fade-in');
	}
}