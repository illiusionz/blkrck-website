// Import plugins

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Normalize scrolling behavior
ScrollTrigger.normalizeScroll(true);

// Create a smooth scroller
const smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});

// Scroll to the spot where .box-c is in the center
document.querySelector(".header-arrow").addEventListener("click", () => {
    smoother.scrollTo(".section1", true, "top 0");
});

// Animate logos in section 2
const section2 = document.querySelector('.section2');
const logos = document.querySelectorAll('.logo');

const section1 = document.querySelector('.section1');
const section1Copy = section1.querySelectorAll('.section1__copy');




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


section1Copy.forEach((copy) => {
    gsap.set(copy, {
        opacity: 0,
        y: 200
    });
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section1,
            start: 'top 80%'
        },
    });
    tl.to(section1Copy, {
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




  const video = document.getElementById("myVideo");
  const loadingIcon = document.getElementById("loadingIcon");
  
  // Show the loading icon when the video starts buffering
  video.addEventListener("waiting", () => {
    loadingIcon.style.display = "flex";
  });
  
  // Hide the loading icon when the video starts playing
  video.addEventListener("playing", () => {
    loadingIcon.style.display = "none";
  });
  

//When Pages loads -scroll to top
window.onbeforeunload = function () {
    console.log('onbeforeunload');
    window.scrollTo(0, 0);
}
