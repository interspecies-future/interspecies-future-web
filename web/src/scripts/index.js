import gsap from "gsap";

// let rects = document.querySelectorAll()

gsap.fromTo(".lenticular-mask rect",{
  scaleY: 0.3,
},
{
  scaleY: 0.7,
  duration: 0.5,
  stagger: 0.05,
  yoyo:true,
  repeat:-1
});