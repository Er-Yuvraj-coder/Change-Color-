const bulb=document.querySelector('.bulb');
const switchh= document.querySelector('.switch');
 let condition= false;
 switchh.addEventListener("click", function (){
    if (condition===false){
        bulb.style.backgroundColor="skyblue";
        condition= true;
        switchh.innerHTML="Off";
    }
    else if (condition===true){
        bulb.style.backgroundColor="lightgreen";
        condition = false;
        switchh.innerHTML="On";
    }
 }
 );

 