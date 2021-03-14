// main nav //
const mainNav = document.querySelector('#main-nav'); 
const topOfMainNav = mainNav.offsetTop;

    function fixMainNav() {
        if(window.scrollY >= topOfMainNav) {
            document.body.style.paddingTop = topOfMainNav + 'px';
            document.body.classList.add('fixed-mainNav');
        } else {
            document.body.style.paddingTop = 0;
            document.body.classList.remove('fixed-mainNav');
        }
        console.log("top of main nav:", topOfMainNav);
    }

    window.addEventListener('scroll', fixMainNav);

// about nav //
const aboutNav = document.querySelector('#about-nav');
const topOfAboutNav = aboutNav.offsetTop;
const heightOfMainNav = mainNav.offsetHeight;

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

// // cv nav //
// const cvNav = document.querySelector('#cv-nav');
// const topOfCvNav = cvNav.offsetTop;

//     function fixCvNav() {
//         if(window.scrollY >= topOfCvNav - (heightOfMainNav*2)) {
//             document.body.classList.add('fixed-cvNav');
//             document.getElementById("cv-nav").style.marginTop = `${heightOfMainNav*2}px`;
//             document.getElementById("cv-nav-title").style.paddingLeft = '0';
//         } else {
//             document.body.classList.remove('fixed-cvNav');
//             document.getElementById("cv-nav").style.marginTop = 0;
//             document.getElementById("cv-nav-title").style.paddingLeft = 0;
//         }
//     }
//     window.addEventListener('scroll', fixCvNav);

// // portfolio nav //
// const portfolioNav = document.querySelector('#portfolio-nav');
// const topOfPortfolioNav = portfolioNav.offsetTop;

//     function fixPortfolioNav() {
//         if(window.scrollY >= topOfPortfolioNav - (heightOfMainNav*4)) {
//             document.body.classList.add('fixed-portfolioNav');
//             document.getElementById("portfolio-nav").style.marginTop = `${heightOfMainNav*3}px`;
//             document.getElementById("portfolio-nav-title").style.paddingLeft = '0';
//         } else {
//             document.body.classList.remove('fixed-portfolioNav');
//             document.getElementById("portfolio-nav").style.marginTop = 0;
//             document.getElementById("portfolio-nav-title").style.paddingLeft = 0;
//         }
//     }
//     window.addEventListener('scroll', fixPortfolioNav);