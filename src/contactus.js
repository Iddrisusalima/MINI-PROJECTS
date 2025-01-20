function changebackg(){
    let met =document.getElementById("sign");
    met.style.backgroundColor="#00A8E8";
}

let back=document.getElementById("sign");
back.addEventListener("mouseover",changebackg);

function changebackg1(){
    let getone =document.getElementById("sign");
    getone.style.backgroundColor="white";
}

let back2=document.getElementById("sign");
back2.addEventListener("mouseleave",changebackg1);