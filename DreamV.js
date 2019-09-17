var hero = document.querySelector(".hero");
var slider = document.querySelector(".slider");
var logo = document.querySelector(".logo");
var line = document.querySelector(".hamburger");
var headline = document.querySelector(".headline");

var time = new TimelineMax();

time.fromTo(hero, 2, {height: "10%"},{height:"90%"})
.fromTo(hero, 1.4, {width:"100%"}, {width:"80%"})
.fromTo(slider, 1.4, {x:"-100%"}, {x:"0%"}, "-=1.4")
.fromTo(logo, 0.5, {opacity:0, x: 50}, {opacity: 1, x:0}, "-=0.5")
.fromTo(line, 0.5, {opacity:0, x: 50}, {opacity: 1, x:0}, "-=0.5")
.fromTo(headline, 0.5, {opacity:0, x: 50}, {opacity: 1, x:0}, "-=0.5")