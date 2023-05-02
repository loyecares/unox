const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".pin-me-down",
        pin: ".pin-me-down",
        start: "top top",
        end: () => `+=100%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: true
    },
});

function pinStats() {
    // document.querySelector('.articles').style.visibility = "visible";
    tl.to(".box", {
        y: 300
    })
}

window.addEventListener("load", function (event) {
    pinStats();
});