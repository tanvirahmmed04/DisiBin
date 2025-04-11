
// contentbox defined before . now code for next



//image slider for wevdev section
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 2000); 
// Change slide every 3 seconds
//web dev packages

const pack1= document.querySelector(".package1");
const pack2= document.querySelector(".package2");
const pack3= document.querySelector(".package3");

const pack1btn= document.querySelector("#pack1btn");
const pack2btn= document.querySelector("#pack2btn");
const pack3btn= document.querySelector("#pack3btn");

pack1btn.onclick= function(act){
    act.preventDefault();
    pack1.style.display="flex";
    pack2.style.display="none";
    pack3.style.display="none";
    pack1btn.style.borderBottom="3px solid #153A42";
    pack2btn.style.borderBottom="none";
    pack3btn.style.borderBottom="none";
}
pack2btn.onclick= function(act){
    act.preventDefault();
    pack1.style.display="none";
    pack2.style.display="flex";
    pack3.style.display="none";
    pack2btn.style.borderBottom="3px solid  #153A42";
    pack1btn.style.borderBottom="none";
    pack3btn.style.borderBottom="none";
}
pack3btn.onclick= function(act){
    act.preventDefault();
    pack1.style.display="none";
    pack2.style.display="none";
    pack3.style.display="flex";
    pack1btn.style.borderBottom="none";
    pack2btn.style.borderBottom="none";
    pack3btn.style.borderBottom="3px solid #153A42";
}




s
