// const tl = gsap.from('.box', {
//     duration: 1.5,
//     stagger: 1,
//     yPercent: 500,
//     opacity: 0
//   })

//   ScrollTrigger.create({
//     animation: tl,
//     trigger: '.wrapper',
//     markers: true,
//     start: 'top top',
//     end: "bottom bottom",
//     scrub: 1,
//     pin: '.wrapper',
//     // pinSpacing: false
//   })

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.wrapper',
        pin: '.wrapper',
        scrub: 1,
        start: "top top",
        // markers: true,
        end: "bottom bottom",
        toggleAction: "restart none none none"
    }
});

tl1.from('.box', {
    duration: 1.5,
    stagger: 1,
    yPercent: 500,
    opacity: 0
})