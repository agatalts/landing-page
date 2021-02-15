// Global variables

const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


// Navigation

sections.forEach(section => {
  const navButton = `<li class="menu__link ${section.id}"><a href="#${section.id}">${section.dataset.nav}</a></li>`;
 
navBar.insertAdjacentHTML('beforeend', navButton)
 });


// Active buttons in navigation while scrolling

const navItem = document.querySelectorAll('.menu__link');
 
window.addEventListener("scroll", () => {
  let currentPosition = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentPosition = section.getAttribute("id");
    }
  });

  navItem.forEach((li) => {
    li.classList.remove("navbar__button-active");
    if (li.classList.contains(currentPosition)) {
      li.classList.add("navbar__button-active");
    }
  }); 
});

