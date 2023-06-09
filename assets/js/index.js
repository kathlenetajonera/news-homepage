const nav = document.querySelector('.nav');
const navicon = document.querySelector('.nav__navicon');
const menu = document.querySelector('.nav__menu');
const navItems = document.querySelectorAll('.nav__item');
const featuredImage = document.querySelector('.featured__image img');

const tl = gsap.timeline({
    paused: true,
    onStart: () => nav.classList.add('active'),
    onReverseComplete: () => nav.classList.remove('active'),
});

let windowWidth = window.innerWidth;
let resizeTimer;

init();

function init() {
    changeFeaturedImageSource(windowWidth);
    windowWidth < 768 && registerNavTimeline();

    navicon.addEventListener('click', toggleMobileMenu);
    window.addEventListener('resize', () => {
        if (window.innerWidth !== windowWidth) {
            windowWidth = window.innerWidth;

            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                window.location.reload();
            }, 250);
        }
    });
}

function registerNavTimeline() {
    const setInitialValues = () => {
        gsap.set(menu, { x: 0, autoAlpha: 1 });
        gsap.set(navItems, { x: 0, autoAlpha: 1 });
    };

    setInitialValues();

    tl.from(menu, {
        autoAlpha: 0,
        x: '100%',
        duration: 0.4,
    }).from(navItems, {
        autoAlpha: 0,
        x: 20,
        stagger: 0.1,
    });
}

function toggleMobileMenu() {
    const isActive = nav.classList.contains('active');
    isActive ? tl.reverse(0) : tl.play();
}

function changeFeaturedImageSource(windowWidth) {
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
