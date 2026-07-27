
window.addEventListener("scroll", function() {
  var navbar = document.querySelector("nav"); 
  
  if (window.scrollY > 160) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

let index = 0;

function startCarousel() {
  
  const track = document.querySelector('.ctrack');
  const cards = document.querySelectorAll('.fcard');
  
  if (!track || cards.length === 0) return;

  setInterval(() => {
    const totalCards = cards.length;
    
    const cardsInView = window.innerWidth > 900 ? 3 : (window.innerWidth > 600 ? 2 : 1);
    const maxIndex = totalCards - cardsInView;

    index++;

    if (index > maxIndex) {
      index = 0;
    }

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 20; 
    

    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
  }, 4000); 
}


document.addEventListener("DOMContentLoaded", startCarousel);

const menuToggle = document.querySelector(".mtoggle");
const navItems = document.querySelector(".nitems");

menuToggle.addEventListener("click", () => {
    navItems.classList.toggle("active");
});

