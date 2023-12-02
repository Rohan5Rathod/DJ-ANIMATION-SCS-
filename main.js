'use script';

let circle = document.querySelector('.circle');

window.addEventListener('mousemove', function (details) {
  let xvalue = details.clientX;
  let yvalue = details.clientY;

  setTimeout(() => {
    circle.style.top = `${yvalue}px`;
    circle.style.left = `${xvalue}px`;
  }, 100);
});


var tl = gsap.timeline();

tl.from(".wrapper",{
    duration:3,
    scale:0.6,
    ease:"Expo.easeInOut",
    opacity:0,
})
.from(".whitestrip",{
    duration:3,
    width:0,
    ease:"Expo.easeInOut",
},'-=2.5')
.from(".blackcard",{
    duration:1.5,
    x:50,
    opacity:0,
    ease:"Expo.easeInOut",
},'-=1')
.from(".lineelem",{
    duration:1.5,
    x:50,
    opacity:0,
    ease:"Expo.easeInOut",
},'-=1')
.from(".lineelem .line",{
    duration:2.5,
    width:0,
    opacity:0,
    ease:"Expo.easeInOut",
},'-=1')
.from(".blackcard p",{
    duration:2,
    y:30,
    opacity:0,
    ease:"Expo.easeInOut",
},'-=1.5')
.from(".sideelem",{
    duration:2,
    y:30,
    opacity:0,
    ease:"Expo.easeInOut",
},'-=1.5')


const btn = document.querySelector("#btn");

btn.addEventListener('click', function(){
    tl.reverse();
})
