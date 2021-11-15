;

'use strict';

// declareted all constans what we need in this prjct
const d = document,
    burgerBtn = d.burgerBtn = d.querySelector('.burger-btn'),
    navbar = d.querySelector('.menu'),
    closeBtn = d.querySelector('.close-btn'),
    modalLinks = d.querySelectorAll('.menu-item'),
    theHomeLink = navbar.firstChild;

window.HTMLElement.prototype.scrollIntoView = function () { };

// open dropdown list when user clicks on burger button
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.add('burger-btn_hidden');
    navbar.classList.add('menu-flex');
    closeBtn.classList.add('close-btn_hidden');
})

// close dropdown list when user clicks on close button
closeBtn.addEventListener('click', () => {
    burgerBtn.classList.remove('burger-btn_hidden');
    navbar.classList.remove('menu-flex');
    closeBtn.classList.remove('close-btn_hidden');
})



// click event on each anchor link should close the dropdown, first anchor will reload the page
modalLinks.forEach(item => {
    item.addEventListener('click', (event) => {
        if (event.target == theHomeLink) window.location.reload();
        burgerBtn.classList.remove('burger-btn_hidden');
        navbar.classList.remove('menu-flex');
        closeBtn.classList.remove('close-btn_hidden');
    })
})






