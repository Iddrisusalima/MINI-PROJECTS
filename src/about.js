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