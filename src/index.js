



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
}

let On=document.getElementById("main");
On.addEventListener("mouseleave",changeback);

// background change1
function changebackg(){
    let met =document.getElementById("team");
    met.style.backgroundColor="blue";
}

let back=document.getElementById("team");
back.addEventListener("mouseover",changebackg);

function changebackg1(){
    let getone =document.getElementById("team");
    getone.style.backgroundColor="#00A8E8";
}

let back2=document.getElementById("team");
back2.addEventListener("mouseleave",changebackg1);

// background change2
function changebackgr(){
    let met2 =document.getElementById("team1");
    met2.style.backgroundColor="blue";
}

let back0=document.getElementById("team1");
back0.addEventListener("mouseover",changebackgr);

function changebackg2(){
    let get1 =document.getElementById("team1");
    get1.style.backgroundColor="#00A8E8";
}

let back3=document.getElementById("team1");
back3.addEventListener("mouseleave",changebackg2);


// images
function changeone(){
    let more =document.getElementById("first");
    more.style.width="300px";
   
}

let on1=document.getElementById("first");
on1.addEventListener("mouseover",changeone);

function change1(){
    let get =document.getElementById("first");

    
}

let On1=document.getElementById("first");
On1.addEventListener("mouseleave",change1);
