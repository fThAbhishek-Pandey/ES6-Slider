function ThirthCard (daam,slideIndex,flag){
     const {img,name,famous,text}= daam;
     console.log(slideIndex);
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (flag) {
      console.log("hi ");
      position = 'last';
    }
    if (daam.length <= 1) {
      position = 'active'
    }
    return `
    <article class="slide ${position}">
        <img src=${img} class="img" alt="${name}"/>
        <h4>${name}</h4>
        <p class="title">${famous}</p>
        <p class="text">${text}</p>
        <div class="quote-icon">
           <i class="fas fa-quote-right"></i>
        </div>
    </article>`
}
  console.log (ThirthCard);
 
export default  ThirthCard;
