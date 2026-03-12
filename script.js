// Smooth scroll for navigation links

document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

window.scrollTo({
top: target.offsetTop - 20,
behavior: 'smooth'
});
});
});

// Show message when page loads

window.onload = function(){
console.log("Art of Advertisement website loaded");
};