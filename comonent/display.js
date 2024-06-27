import getElement from "./getElement.js";
// 
// 
const sliderContainer = getElement(".slide-container");
function display (type){
        const active = getElement(".active");
        const last = getElement(".last");
        let next = active.nextElementSibling
        if (!next) {
            next = sliderContainer.firstElementChild
        }
           active.classList.remove('active');
           last.classList.remove('last');
           next.classList.remove('next');

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling
    if (!next) {
      next =sliderContainer.lastElementChild
    }
    next.classList.remove('next')
    next.classList.add('last')
    return
  }
  active.classList.add('last')
  last.classList.add('next')
  next.classList.add('active')
}       
export default display;