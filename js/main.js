

/*
function rotate(){
document.getElementById("back").style.display="block";
 var degrees = 180;
document.getElementById("about").style.transform = "rotateY("+degrees+"deg)";

//document.getElementById("about").style.transform = "rotateY(180eg)";
 
document.getElementById("about2").style.display="none";
document.getElementById("button").style.display="none";

}*/
// rotate block 'about-back' y180
function rotate(about,back){
    document.getElementById(back).style.display="block";
    document.getElementById(about).style.transform = "rotateY(180deg)";
}
function rotateLeave(about,back){
    document.getElementById(about).style.transform ="rotateY(0deg)";
    document.getElementById(back).style.display="none";
}

// scrollreaver
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.foo-1', { duration: 2000 });

sr.reveal('.right', { origin: 'right', distance: '50%', duration: 2000 });

sr.reveal('.foo-3', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});

sr.reveal('.foo-4', { 
  viewFactor: 1
});

sr.reveal('.foo-5', { 
  duration: 2500 
});