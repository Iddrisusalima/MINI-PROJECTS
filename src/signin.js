function changebackg(){
    let met =document.getElementById("sign");
    met.style.backgroundColor="#00A8E8";
    met.style.transitionDuration="300ms";
}

let back=document.getElementById("sign");
back.addEventListener("mouseover",changebackg);

function changebackg1(){
    let getone =document.getElementById("sign");
    getone.style.backgroundColor=" #005fa3";
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

let backoff=document.getElementById("team");
backoff.addEventListener("mouseover",changebackof);

function changebackoff(){
    let getone =document.getElementById("team");
    getone.style.backgroundColor="#00A8E8";
    getone.style.transitionDuration="300ms";
}

let back3=document.getElementById("team");
back3.addEventListener("mouseleave",changebackoff);