let Mouse = ()=>{
    let user = document.getElementById('uname').value;
    alert("Hi"+user);

}
let demo = ()=>{
    let c1 = document.getElementsByClassName('d1');
    c1[1].style.color="red";

}
let Tag = ()=>{
    let c1 = document.getElementsByTagName('p');
    let result = c1.length;
    alert(`The count of paragraph tags : ${result}`);
}
let Label = ()=>{
    let l1 = document.createElement('label');
    let txt = document.createTextNode("Enter a user name:");
     l1.appendChild(txt);
     let inp = document.createElement('input');
     inp.setAttribute('type',"text");
     inp.setAttribute('id',"uname");
     inp.setAttribute('value',"");
     inp.setAttribute('placeholder',"Enter a name");
     l1.appendChild(inp);
     document.body.appendChild(l1);
}
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === ""){
        alert('please enter a task');
        return;
    }
const li = document.createElement('li');
li.textContent = taskText;

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.onclick = function(){
    taskList.removeChild(li);
};

li.appendChild(deleteButton);
taskList.appendChild(li);
taskInput.value = '';
}