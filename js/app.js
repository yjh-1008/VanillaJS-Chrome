const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const link=document.querySelector("a");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
function onLoginSubmit(e) {
    e.preventDefault();//stop default behavior
    const username=loginInput.value;
    localStorage.setItem("username",username);
    paintGreetings();
    console.log(username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText=`hello ${username}`;
}

const savedUsername= localStorage.getItem("username");
console.log(savedUsername);
if(savedUsername===null){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

}else{
    paintGreetings(localStorage.getItem("username"));
}
