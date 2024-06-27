import ThirthCardArr from "./thirthcardstr.js";
import display from "./display.js";
import CharDaam from "./data.js";
import getElement from "./getElement.js";
const prevBtn = getElement(".prev-btn");
const NextBtn = getElement (".next-btn");
const container = getElement(".slide-container");

const tirthcard = ThirthCardArr (CharDaam);
container.innerHTML = tirthcard;
const startSlider = () => {
    const slide = getElement(".slide");
    console.log(slide);
    console.log (tirthcard);
    console.log(typeof tirthcard);
    console.log( container.firstElementChild);
    display ();
    function prev (e){
      console.log("I am previous funcion");
          console.log(e);
          display ("prev");
    }
    function next (){
      console.log("I am next function");
     
      display ();
   }
    prevBtn.addEventListener("click",prev);
    NextBtn.addEventListener("click",next);
  
   
}
export default startSlider;