window.addEventListener("DOMContentLoaded", () => {
    console.log("hi")
    gsap.from("#title", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power1.out"
    })
});