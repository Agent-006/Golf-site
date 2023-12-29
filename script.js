let crsr = document.querySelector("#cursor");
let crsr_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsr_blur.style.left = dets.x - 250 + "px";
    crsr_blur.style.top = dets.y - 250 + "px";
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = ".5px solid #fff";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition = "scale 0.2s";
    });
    element.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.transition = "scale 0.5s";
    });
});


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,

    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: tru20
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about_us img,#about_us_in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about_us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        // markers: true,
        start: 'top 55%',
        end: 'top 45%',
        scrub: 3
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        // markers: true,
        start: 'top 55%',
        end: 'top 45%',
        scrub: 3
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: '#page4 h1',
        scroller: 'body',
        // markers: true,
        start: 'top 75%',
        end: 'top 70%',
        scrub: 3
    }
})

