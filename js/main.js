// Import plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Normalize scrolling behavior
ScrollTrigger.normalizeScroll(true);

// Create a smooth scroller
const smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 0.1
});

// Scroll to the spot where .box-c is in the center
document.querySelector(".header-arrow").addEventListener("click", () => {
    smoother.scrollTo(".section1", true, "top 0");
});

// Animate logos in section 2
const section2 = document.querySelector('.section2');
const logos = section2.querySelectorAll('.logo');

logos.forEach((logo) => {
    gsap.set(logo, {
        opacity: 0,
        y: 200
    });
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section2,
            start: 'top 80%'
        },
    });
    tl.to(logos, {
        opacity: 1,
        y: 0,
        duration: .1,
        ease: 'expoOut',
        stagger: .05
    });
});

var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });