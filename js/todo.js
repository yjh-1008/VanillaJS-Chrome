const toDoForm=document.getElementById("todo-form");
const toDoInput= document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");
let toDos=[];
const TODOS_KEY="toDos";
function saveToDos(){
    localStorage.setItem("toDos",JSON.stringify(toDos));
}


function deleteToDo(e) {
    //console.log("lalala")
    const li = e.target.parentElement;
    //console.dir(li);
    li.remove();
}

function paintToDo(newToDo){
    const li=document.createElement("li");
    li.id=newToDo.id;   
    const span=document.createElement("span");
    span.innerText=newToDo.text;
    const btn=document.createElement("button");
    btn.innerText="❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);

}


function handleToDoSubmit(e){
    e.preventDefault();
    //console.log(toDoInput.value);
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos=localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos!=null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}

