;

'use strict';

// declareted all constans what we need in this prjct
const d = document,
    burgerBtn = d.burgerBtn = d.querySelector('.burger-btn'),
    navbar = d.querySelector('.nav__menu');


burgerBtn.addEventListener('click', () => {
    burgerBtn.style.display = 'none';
    navbar.style.display = 'flex';
})


