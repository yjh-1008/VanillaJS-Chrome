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

function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){
    alert("copier");
}

function handleWindowOffline(){
    alert("SOS on WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD!");
}
title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);