// Existing Functions (Keep these)
function toggleMenu() {
 const menu = document.querySelector('.menu');
menu.classList.toggle('active');
}

function openModal(modalId) {
const modal = document.getElementById(modalId);
modal.style.display = "block";
}

function closeModal(modalId) {
const modal = document.getElementById(modalId);
 modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
 if (event.target.classList.contains('modal')) {
 event.target.style.display = "none";
 }
}

// ------------------------------------------------------------------------------
// NEW CODE FOR SCROLL-REVEAL ANIMATIONS
// ------------------------------------------------------------------------------

// Function to handle the intersection of an element
const handleIntersection = (entries, observer) => {
entries.forEach(entry => {
// If the element is intersecting (in view), add the animated class
if (entry.isIntersecting) {
 entry.target.classList.add('animated');
// Stop observing the element once it's animated to improve performance
 observer.unobserve(entry.target);
 }
});
};

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(handleIntersection, {
root: null, // Sets the viewport as the root element
threshold: 0.2 // Trigger when 20% of the target element is visible
});

// Select all the cards you want to animate on scroll
const allCards = document.querySelectorAll('.card, .scard, .sbcards');

// Loop through each card and start observing it
allCards.forEach(card => {
 observer.observe(card);
});