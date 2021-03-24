// main nav
const mainNav = document.querySelector('#main-nav'); 
const topOfMainNav = mainNav.offsetTop;
const heightOfMainNav = mainNav.offsetHeight;

function fixMainNav() {
    if(window.scrollY >= topOfMainNav) {
        document.body.style.paddingTop = heightOfMainNav + 'px';
        document.body.classList.add('fixed-mainNav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-mainNav');
    }
}
window.addEventListener('scroll', fixMainNav);

//about nav
const aboutNav = document.querySelector('#about-nav'); 
const topOfAboutNav = aboutNav.offsetTop;

function fixAboutNav() {
    if(window.scrollY >= topOfAboutNav - (heightOfMainNav*2)) {
        document.body.classList.add('fixed-aboutNav');
        document.getElementById("about-nav").style.marginTop = `${heightOfMainNav}px`;
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-aboutNav');
        document.getElementById("about-nav").style.marginTop = 0;
    }
}
window.addEventListener('scroll', fixAboutNav);

//cv nav
const cvNav = document.querySelector('#cv-nav'); 
const topOfCvNav = cvNav.offsetTop;

function fixCvNav() {
    if(window.scrollY >= topOfCvNav - (heightOfMainNav*4)) {
        document.body.classList.add('fixed-cvNav');
        document.getElementById("cv-nav").style.marginTop = `${heightOfMainNav*2}px`;
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-cvNav');
        document.getElementById("cv-nav").style.marginTop = 0;
    }
}
window.addEventListener('scroll', fixCvNav);

//portfolio nav
const portfolioNav = document.querySelector('#portfolio-nav'); 
const topOfPortfolioNav = portfolioNav.offsetTop;

function fixPortfolioNav() {
    if(window.scrollY >= topOfPortfolioNav - (heightOfMainNav*5)) {
        document.body.classList.add('fixed-portfolioNav');
        document.getElementById("portfolio-nav").style.marginTop = `${heightOfMainNav*3}px`;
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-portfolioNav');
        document.getElementById("portfolio-nav").style.marginTop = 0;
    }
}
window.addEventListener('scroll', fixPortfolioNav);

//contact nav
const contactNav = document.querySelector('#contact-nav'); 
const topOfContactNav = contactNav.offsetTop;

function fixContactNav() {
    if(window.scrollY >= topOfContactNav - (heightOfMainNav*6)) {
        document.body.classList.add('fixed-contactNav');
        document.getElementById("contact-nav").style.marginTop = `${heightOfMainNav*4}px`;
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-contactNav');
        document.getElementById("contact-nav").style.marginTop = 0;
    }
}
window.addEventListener('scroll', fixContactNav);