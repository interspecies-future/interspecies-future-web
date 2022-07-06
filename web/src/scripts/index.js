import gsap from "gsap";

let foreground, background, ondeck, tl;

function getPrevious(el){
  let previous = el.previousElementSibling || el.parentElement.lastElementChild
  return previous
}

function animate(){
  tl = gsap.timeline({onRepeat: advanceSlides, duration: 0.5, repeat: -1, repeatDelay: 1})
  fMask = foreground.querySelectorAll('rect')
  bMask = background.querySelectorAll('rect')
  oMask = ondeck.querySelectorAll('rect')

  // reset positions
  tl.to(fMask, { scaleY: 0.5, duration: 0 })
  tl.to(bMask, { scaleY: 1, duration: 0 })
  tl.to(oMask, { scaleY: 1, duration: 0 })
  tl.to('.lenticular', {opacity: 1, duration: 0.5}) // fade-in on initial load

  // begin animation
  tl.to(fMask, { scaleY: 0.2, stagger: 0.05 }, "<") // simultanious with fade-in

  // next two happen together, but staggered, revealing new img
  tl.to(fMask, { scaleY: 0, stagger: 0.05 })
  tl.to(bMask, { scaleY: 0.8, stagger: 0.05 }, "<0.5")

  tl.to(bMask, { scaleY: 0.5, stagger: 0.05 })
  // trigger advance via callback
}

function advanceSlides(){
  let slides = document.querySelectorAll('.lenticular__slide')
  let current = document.querySelector('.lenticular__slide.foreground') || slides[0]

  if (!slides) return
  if (!current) return

  if(tl){
    tl.kill()
    tl = null
  }
  if(current){ current.classList.remove('foreground') }
  if(background){background.classList.remove('background')}
  if(ondeck){ondeck.classList.remove('ondeck')}

  foreground = getPrevious(current)
  foreground.classList.add('foreground')

  background = getPrevious(foreground)
  background.classList.add('background')

  ondeck = getPrevious(background)
  ondeck.classList.add('ondeck')
  animate()
}

advanceSlides()