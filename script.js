/*==============================
      COUNTER ANIMATION
===============================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target+"+";

}

}

updateCounter();

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/*==========================
      TYPING EFFECT
===========================*/

const text = [

"Information Systems Student",

"Web Developer",

"System Developer",

"UI / UX Designer"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

(function type(){

if(count === text.length){

count = 0;

}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;

index = 0;

setTimeout(type,1500);

}else{

setTimeout(type,120);

}

})();
/*==========================
      SCROLL REVEAL
===========================*/

window.addEventListener("scroll", reveal);

function reveal(){

const reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;

let revealTop = reveals[i].getBoundingClientRect().top;

let revealPoint = 120;

if(revealTop < windowHeight - revealPoint){

reveals[i].classList.add("active");

}

}

}
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>50);

});
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});