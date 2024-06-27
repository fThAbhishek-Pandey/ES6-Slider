import ThirthCard from "./tirthcard.js";

function ThirthCardArr (ThirthData){
            const len = ThirthData.length-1 ;
            const thirthCardStr = ThirthData.map((tirthSthal, index)=>{
                     console.log(index);
                     let  flag= false;
                     if(len === index) flag = true;
                     const tirth = ThirthCard(tirthSthal,index, flag);
                     return tirth;
     }).join(" ");
      return thirthCardStr;
}
export default ThirthCardArr;