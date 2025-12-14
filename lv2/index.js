window.addEventListener("DOMContentLoaded", () => {
    animate();
});

function animate() {
    const tl = gsap.timeline();
    tl.from(".title", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power1.out",
    }).from(".desc", {
        duration: 1,
        opacity: 0,
        ease: "power1.out",
    }, "-=0.3").from(".btn", {
        duration: 1,
        scale: 0,
        ease: "back.out",
    });
}