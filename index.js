gsap.registerPlugin(ScrollTrigger);


window.addEventListener("DOMContentLoaded", () => {
    animate();
});

function animate() {
    gsap.to(".section", {
        duration: 1,
        y: 100,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".section",
            start: "center bottom",
            end: "center top",
            scrub: 1,
        }
    })
}