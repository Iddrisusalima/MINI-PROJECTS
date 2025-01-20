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

// image size
function sizeup(){
    let pics =document.getElementById("image");
    pics.style.borderRadius="50%";
    pics.style.transitionDuration="300ms";

}

let pic =document.getElementById("image");
pic.addEventListener("mouseover", sizeup);

function sizedown(){
    let picsone =document.getElementById("image");
    picsone.style.borderRadius="0%";
    picsone.style.transitionDuration="300ms";
}

let pictwo =document.getElementById("image");
pictwo.addEventListener("mouseleave", sizedown);

// background change1
function changebackof(){
    let met =document.getElementById("team");
    met.style.backgroundColor="blue";
    met.style.transitionDuration="300ms";
}

let backof=document.getElementById("team");
backof.addEventListener("mouseover",changebackof);

function changebackoff(){
    let getone =document.getElementById("team");
    getone.style.backgroundColor="white";
    getone.style.transitionDuration="300ms";
}

let backoff=document.getElementById("team");
backoff.addEventListener("mouseleave",changebackoff);


