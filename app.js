const title=document.querySelector("div.hello:first-child h1");

function handleTitleClick(e){
    title.style.color="blue";
    console.log("title was licked!");
}

function handleMouseEnter(){
    title.innerText="Mouse is here";
}

function handleMouseLeave(){
    title.innerText="Mouse is gone~";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);