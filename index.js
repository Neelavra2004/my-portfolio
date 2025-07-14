// Grab elements
const hamburger  = document.getElementById('hamburgBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn   = document.getElementById('closeBtn');

// open dropdown
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('show');
});

// close dropdown via X icon
closeBtn.addEventListener('click', closeMenu);

// also close when any link is clicked (called inline in HTML)
function closeMenu() {
  mobileMenu.classList.remove('show');
}
