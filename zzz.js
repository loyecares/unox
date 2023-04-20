const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.wrapper',
        pin: '.wrapper',
        scrub: 1,
        start: "top top",
        markers: true,
        end: "+=200",
        toggleAction: "restart none none none"
    }
});

tl1.to('.green-bg-bg', {
    y: -2000,
}, 0)

tl1.to('.red-bg-bg', {
    y: -500,
}, 0)

// ScrollTrigger.create({
//     animation: tl1,
//     trigger: '.wrapper',
//     markers: true,
//     start: 'top top',
//     end: "bottom bottom",
//     scrub: 1,
//     pin: '.wrapper',
// })