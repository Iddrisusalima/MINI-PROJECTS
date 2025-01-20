function changebackg(){
    let met =document.getElementById("sign");
    met.style.backgroundColor="transparent";
}

let back=document.getElementById("sign");
back.addEventListener("mouseover",changebackg);

function changebackg1(){
    let getone =document.getElementById("sign");
    getone.style.backgroundColor="#005fa3";
}

let back2=document.getElementById("sign");
back2.addEventListener("mouseleave",changebackg1);