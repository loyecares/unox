const tl = gsap.to('.box', {
    duration: 5,
    stagger: 0.75,
    yPercent: 5000,
    opacity: 1
})

ScrollTrigger.create({
    animation: tl,
    trigger: '.wrapper',
    markers: true,
    start: 'top top',
    end: "bottom bottom",
    scrub: 1,
    pin: '.wrapper',
    // pinSpacing: false
})