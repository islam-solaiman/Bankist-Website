'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Tab Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content')

////////////////////////////////////
// Modal Window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener
  ('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Scorll Function

btnScrollTo.addEventListener('click', function(e){
  section1.scrollIntoView({behavior: 'smooth'});
});

// rgb(255, 255, 255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
// });

// Page Navigation 
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })

// });

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'});
})

/////////////////////////////////////////////////
// Page Navigation


tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');

  // Gurd Class
  if(!clicked) return;

  // Active Tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Active Content Area
  tabContent.forEach(tc => tc.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
  .classList.add('operations__content--active');
});