import gsap from "gsap";

// let rects = document.querySelectorAll()

gsap.from(".lenticular-mask rect", {scaleY:0.25, duration: 6, yoyo:true, repeat:-1 });