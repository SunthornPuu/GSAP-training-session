window.addEventListener("DOMContentLoaded", () => {
    animate();
});

function animate() {
    gsap.from(".item", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.2
    })
}