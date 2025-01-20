function changebackg(){
    let met =document.getElementById("sign");
    met.style.backgroundColor="transparent";
    met.style.transitionDuration="300ms";
}

let back=document.getElementById("sign");
back.addEventListener("mouseover",changebackg);

function changebackg1(){
    let getone =document.getElementById("sign");
    getone.style.backgroundColor="#005fa3";
    getone.style.transitionDuration="300ms";
}

let back2=document.getElementById("sign");
back2.addEventListener("mouseleave",changebackg1);

// background change1
function changebackof(){
    let met =document.getElementById("team");
    met.style.backgroundColor="blue";
    met.style.transitionDuration="300ms";
}

let back5=document.getElementById("team");
back5.addEventListener("mouseover",changebackof);

function changebackoff(){
    let getone =document.getElementById("team");
    getone.style.backgroundColor="#0099cc";
    getone.style.transitionDuration="300ms";
}

let back3=document.getElementById("team");
back3.addEventListener("mouseleave",changebackoff);