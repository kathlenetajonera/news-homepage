const nav = document.querySelector('.nav');
const navicon = document.querySelector('.nav__navicon');
const featuredImage = document.querySelector('.featured__image img');

let windowWidth = window.innerWidth;

init();

function init() {
    detectIfMobile(windowWidth);

    navicon.addEventListener('click', toggleMobileMenu);
    window.addEventListener('resize', () => {
        if (window.innerWidth !== windowWidth) {
            windowWidth = window.innerWidth;
            detectIfMobile(windowWidth);
        }
    });
}

function toggleMobileMenu() {
    const isActive = nav.classList.contains('active');
    isActive ? nav.classList.remove('active') : nav.classList.add('active');
}

function detectIfMobile(windowWidth) {
    const isMobile = windowWidth < 768;
    const defaultSrc = featuredImage.getAttribute('src');
    const mobileSrc = featuredImage.getAttribute('data-mobile-src');
    const desktopSrc = featuredImage.getAttribute('data-desktop-src');

    const changeSrc = (src) => {
        if (defaultSrc !== src) {
            featuredImage.setAttribute('src', src);
        }
    };

    isMobile ? changeSrc(mobileSrc) : changeSrc(desktopSrc);
}
