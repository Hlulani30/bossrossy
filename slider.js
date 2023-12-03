// Hero Carousel
const slider1 = document.querySelector('#glide_1');
if (slider1) {
  new Glide(slider1, {
    type: 'carousel',
    startAt: 0,
    // autoplay: 700,
    gap: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 3000,
    animationTimingFunc: 'linear',
  }).mount();
}