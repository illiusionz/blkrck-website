gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  smoothTouch:2
});

// pin box-c when it reaches the center of the viewport, for 300px


document.querySelector(".header-arrow").addEventListener("click", e => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  smoother.scrollTo(".section1", true, "top 0");
  
  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  //  scrollTop: smoother.offset(".box-c", "center center"),
  //  duration: 1
  // });
  //gsap.fromTo('.section1__copy1', 1, {y:100}, {y:0});
  //gsap.fromTo('.section1__copy2', 1, {y:100}, {y:0});

});




// select the section element
const section = document.querySelector('.section2');

// select all the logo elements inside the section
const logos = section.querySelectorAll('.logo');

// loop through the logos and create a timeline for each one
logos.forEach((logo) => {
  // set initial properties
  gsap.set(logo, { opacity: 0, y: 100 });

  // create a timeline for the animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 100%', // start the animation when the top of the logo is 80% in view
    },
  });

  // add the animation to the timeline
  tl.to(logos, { opacity: 1, y: 0, duration: .1, ease: 'expoOut', stagger:.05});
});


// Get the section element and all of its child logos
/*const section = document.querySelector('.section2');
const logos = section.querySelectorAll('.logo');

// Define the animation function
function animateLogos() {
  logos.forEach((logo, index) => {
    // Stagger the animation start times by 0.2s increments
    const delay = index * 100;

    // Use a CSS transition to animate the logo
    logo.style.transition = `opacity 0.5s ${delay}ms, transform 0.5s ${delay}ms`;
    logo.style.opacity = 1;
    logo.style.transform = 'translateY(0)';
  });
}

// Add a scroll event listener to trigger the animation
window.addEventListener('scroll', () => {
  // Get the position of the section relative to the top of the viewport
  const sectionTop = section.getBoundingClientRect().top;

  // If the section is in view, start the animation
  if (sectionTop < window.innerHeight) {
    animateLogos();
  }
});*/



FooterAnimation();
function FooterAnimation(){
/* That's all Folks animation */
let endTl = gsap.timeline({
    repeat: -1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px'
    }
  });
  gsap.set('.end', {
    opacity: 0
  });
  gsap.to('.end', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px',
      once: true
    }
  });
  let mySplitText = new SplitText(".end", { type: "words,chars" });
  let chars = mySplitText.chars;
  let endGradient = chroma.scale(['#F9D371', '#F47340', '#EF2F88', '#8843F2']);
  endTl.to(chars, {
    duration: 0.5,
    scaleY: 0.6,
    ease: "power3.out",
    stagger: 0.04,
    transformOrigin: 'center bottom'
  });
  endTl.to(chars, {
    yPercent: -20,
    ease: "elastic",
    stagger: 0.03,
    duration: 0.8
  }, 0.5);
  endTl.to(chars, {
    scaleY: 1,
    ease: "elastic.out(2.5, 0.2)",
    stagger: 0.03,
    duration: 1.5
  }, 0.5);
  endTl.to(chars, {
    color: (i, el, arr) => {
      return endGradient(i / arr.length).hex();
    },
    ease: "power2.out",
    stagger: 0.03,
    duration: 0.3
  }, 0.5);
  endTl.to(chars, {
    yPercent: 0,
    ease: "back",
    stagger: 0.03,
    duration: 0.8
  }, 0.7);
  endTl.to(chars, {
    color: '#fff',
    duration: 1.4,
    stagger: 0.05
  });
  
}
















//Scrolling Effect
/*const arrow = document.querySelector('.arrow');
const section1 = document.querySelector('.section1');


arrow.addEventListener('click', () => {
    section1.scrollIntoView({behavior: 'smooth'});
});


$(document).ready(function() {
    var section1Copy = $('.section1__copy1');
    var offset = 480; // the offset from the top of the page to start showing the logos
    var duration = 500; // the duration of the animation (in milliseconds)


    const slideUp = [
        { transform: "rotate(0) scale(1)" },
        { transform: "rotate(360deg) scale(0)" },
      ];

      const newspaperTiming = {
        duration: 2000,
        iterations: 1,
      };
    
    $(window).scroll(function() {

        console.log($(this).scrollTop());

        if ($(this).scrollTop() > offset) {
            console.log('hello');
            section1Copy.animate(slideUp, duration);
        }

    });
    });
*/



// target the element with the class 'section1__copy1'
const section1Copy1 = document.querySelector('.section1__copy1');



// create a new SplitText instance

var tl = gsap.timeline();
var mySplitText = new SplitText(section1Copy1, { type: "words,chars" });
var chars = mySplitText.chars; //an array of all the divs that wrap each character

// get the individual words in the text
const words = mySplitText.words;

// use GSAP TweenMax to animate each word
TweenMax.staggerFrom(chars, 0.5, {
  opacity: 0,
  y: 10,
  ease: Power2.easeOut
}, 0.03);
