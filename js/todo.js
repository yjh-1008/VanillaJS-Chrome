const toDoForm=document.getElementById("todo-form");
const toDoInput= toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

function deleteToDo(e) {
    const li=e.target.parentElement;
    li.remove();

}

function paintToDo(newToDo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    const btn=document.createElement("button");
    span.innerText=newToDo;
    btn.innerText="X";
    btn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    //console.log(li);
    toDoList.appendChild(li);

}


function handleToDoSubmit(e){
    e.preventDefault();
    console.log(toDoInput.value);
    const newToDo=toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);