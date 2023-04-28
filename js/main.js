// Import plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Normalize scrolling behavior
ScrollTrigger.normalizeScroll(true);

// Create a smooth scroller
const smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 2
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

// Animate the footer
function footerAnimation() {
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
    let mySplitText = new SplitText(".end", {
        type: "words,chars"
    });
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

// Call the footer animation function
footerAnimation();


animateCopy();

function animateCopy() {
    // target the element with the class 'section1__copy1'
    const section1Copy1 = document.querySelector('.section1__copy1');
    const section1Copy2 = document.querySelector('.section1__copy2');

    // create a new SplitText instance
    const mySplitText1 = new SplitText(section1Copy1, {
        type: "words,chars"
    });
    const mySplitText2 = new SplitText(section1Copy2, {
        type: "words,chars"
    });
    const chars1 = mySplitText1.chars; // an array of all the divs that wrap each character
    const chars2 = mySplitText2.chars; // an array of all the divs that wrap each character

    // get the individual words in the text
    const words1 = mySplitText1.words;
    const words2 = mySplitText2.words;

    // use GSAP TweenMax to animate each word
    gsap.from(chars1, {
        opacity: 0,
        y: 10,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.03,
        scrollTrigger: {
            trigger: '.section1__copy1',
            start: 'bottom 100%-=50px'
        }
    });
    gsap.from(chars2, {
        opacity: 0,
        y: 10,
        ease: "power2.out",
        duration: 0.3,
        stagger: 0.01,
        scrollTrigger: {
            trigger: '.section1__copy1',
            start: 'bottom 100%-=50px'
        }
    });
}