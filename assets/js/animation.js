window.onload = () => {
    initAnimation();
};

function initAnimation() {
    animatedStaggerBottom();
    animatedFade();
}

function animatedStaggerBottom() {
    const wrapper = gsap.utils.toArray('.animated-stagger-bottom');

    if (wrapper.length) {
        wrapper.forEach((wrap) => {
            const children = [...wrap.children];

            gsap.from(children, {
                autoAlpha: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.5,
                scrollTrigger: {
                    trigger: wrap,
                    start: 'top 80%',
                },
            });
        });
    }
}

function animatedFade() {
    const fadedElements = gsap.utils.toArray('.animated-fade');

    if (fadedElements.length) {
        fadedElements.forEach((el) => {
            gsap.from(el, {
                autoAlpha: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                },
            });
        });
    }
}
