



function change(){
    let name = prompt("What is your name");
    let get=document.getElementById("main");
    // get.style.overscrollBehavior= "hover";
    get.innerHTML=` Welcome ${name} to TECH FUSION`;
    get.style.fontSize="2em";
    // get.style.color="white";
    // let get =document.getElementById("main");
    // get.style.display="none";
    get.style.transitionDuration="800ms";
    let us =document.getElementById("meet");
    us.innerHTML=`Meet Our Expert team and connect with us`;
    us.style.transitionDuration="800ms";
}
let on=document.getElementById("home");
on.addEventListener("mouseover",change);

function changeback(){
    let get =document.getElementById("main");
    get.style.display="block";
    let Get =document.getElementById("text");
    Get.style.display="block";
    Get.style.transitionDuration="300ms";
}

let On=document.getElementById("main");
On.addEventListener("mouseleave",changeback);

// background change1
function changebackg(){
    let met =document.getElementById("team");
    met.style.backgroundColor="blue";
    met.style.transitionDuration="300ms";
}

let back=document.getElementById("team");
back.addEventListener("mouseover",changebackg);

function changebackg1(){
    let getone =document.getElementById("team");
    getone.style.backgroundColor="#00A8E8";
    getone.style.transitionDuration="300ms";
}

let back2=document.getElementById("team");
back2.addEventListener("mouseleave",changebackg1);

// background change2
function changebackgr(){
    let met2 =document.getElementById("team1");
    met2.style.backgroundColor="blue";
    met2.style.transitionDuration="300ms";
}

let back0=document.getElementById("team1");
back0.addEventListener("mouseover",changebackgr);

function changebackg2(){
    let get1 =document.getElementById("team1");
    get1.style.backgroundColor="#00A8E8";
    get1.style.transitionDuration="300ms";
}

let back3=document.getElementById("team1");
back3.addEventListener("mouseleave",changebackg2);


// change color 1
function changesix(){
    let more =document.getElementById("stat");
    more.style.backgroundColor="#00A8E8";
    more.style.transitionDuration="300ms";
   
   
}

let on6=document.getElementById("stat");
on6.addEventListener("mouseover",changesix);

function change6(){
    let get =document.getElementById("stat");
    get.style.backgroundColor="#004080";
    get.style.transitionDuration="300ms";
}

let On6=document.getElementById("stat");
On6.addEventListener("mouseleave",change6);

// change color 2
function changetwo(){
    let more =document.getElementById("stat2");
    more.style.backgroundColor="#00A8E8";
    more.style.transitionDuration="300ms";
   
}

let on2=document.getElementById("stat2");
on2.addEventListener("mouseover",changetwo);

function change2(){
    let get =document.getElementById("stat2");
    get.style.backgroundColor="#004080";
    get.style.transitionDuration="300ms";
    
}

let On2=document.getElementById("stat2");
On2.addEventListener("mouseleave",change2);

// change color3
function changethree(){
    let more =document.getElementById("stat3");
    more.style.backgroundColor="#00A8E8";
    more.style.transitionDuration="300ms";
   
}

let on3=document.getElementById("stat3");
on3.addEventListener("mouseover",changethree);

function change3(){
    let get =document.getElementById("stat3");
    get.style.backgroundColor="#004080";
    get.style.transitionDuration="300ms";
    
}

let On3=document.getElementById("stat3");
On3.addEventListener("mouseleave",change3);

// change color 4
function changefour(){
    let more =document.getElementById("stat4");
    more.style.backgroundColor="#00A8E8";
    more.style.transitionDuration="300ms";
   
}

let on4=document.getElementById("stat4");
on4.addEventListener("mouseover",changefour);

function change4(){
    let get =document.getElementById("stat4");
    get.style.backgroundColor="#004080";
    get.style.transitionDuration="300ms";
    
}

let On4=document.getElementById("stat4");
On4.addEventListener("mouseleave",change4);
