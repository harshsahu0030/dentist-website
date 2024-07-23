let sliderBar = document.getElementById("slider-bar");
let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
  sliderBar.classList.remove("hidden");
  sliderBar.classList.add("flex");
});

closeIcon.addEventListener("click", () => {
  sliderBar.classList.remove("flex");
  sliderBar.classList.add("hidden");
});

//----------------------------------------------------------------
//gsap

//navbar
let navbarTimeline = gsap.timeline();

navbarTimeline
  .from(".navbar-left a", {
    opacity: 0,
    y: -50,
    duration: 0.5,
  })
  .from(
    ".navbar-left ul li",
    {
      opacity: 0,
      y: -50,
      duration: 0.5,
      stagger: 0.3,
    },
    "=-0.5"
  )
  .from(
    ".navbar-right span",
    {
      opacity: 0,
      x: 50,
      duration: 0.5,
    },
    "-=1"
  )
  .from(
    ".navbar-right a",
    {
      opacity: 0,
      x: 50,
      duration: 0.5,
    },
    "-=1"
  )
  .from(
    ".navbar-right i",
    {
      opacity: 0,
      x: 50,
      duration: 0.5,
    },
    "-=1"
  );

//home
let homeTimeline01 = gsap.timeline();

homeTimeline01
  .from(".home-banner-left h1", {
    opacity: 0,
    x: -50,
    duration: 0.8,
  })
  .from(".home-banner-left p", {
    opacity: 0,
    x: -50,
    duration: 0.8,
  })
  .from(".home-banner-left div", {
    opacity: 0,
    y: 50,
    duration: 0.8,
  })
  .from(
    ".home-banner-right img",
    {
      scale: 0,
      opacity: 0,
      duration: 1,
    },
    "-=1"
  )
  .to(".home-banner-right div", {
    opacity: 0,
    y: -100,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".home-banner-right div",
      scroller: "body",
      start: "top 60%",
      scrub: 0.5,
    },
  });

//about
gsap.from(".about-section-left p", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-section-left p",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from(".about-section-right h2", {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-section-right h2",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from(".about-section-right div img", {
  opacity: 0,
  scale: 0,
  duration: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about-section-right div img",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from(".about-section-right p", {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-section-right p",
    scroller: "body",
    start: "top 80%",
  },
});

//speciality
gsap.from(".speciality-section div div", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".speciality-section div div",
    scroller: "body",
    start: "top 80%",
  },
});

//objectives

gsap.from(".objective-section-right", {
  opacity: 0,
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".objective-section-right",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from(".objective-section-left h3", {
  opacity: 0,
  x: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".objective-section-left h3",
    scroller: "body",
    start: "top 80%",
  },
});
gsap.from(".objective-section-left p", {
  opacity: 0,
  y: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".objective-section-left p",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from(".objective-section-left ul li", {
  opacity: 0,
  x: 50,
  duration: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".objective-section-left ul li",
    scroller: "body",
    start: "top 80%",
  },
});

// footer-section
gsap.from(".footer-section", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer-section",
    scroller: "body",
    start: "top 60%",
  },
});

//contact us section
// let contactTimeline01 = gsap.timeline();

gsap.from(".contact-section", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-section",
    scroller: "body",
    start: "top 60%",
  },
});

gsap.from(".contact-section div", {
  opacity: 0,
  x: -50,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-section div",
    scroller: "body",
    start: "top 60%",
  },
});

gsap.from("#contact", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#contact",
    scroller: "body",
    start: "top 60%",
  },
});

