let itemList = [];
let addItem = () =>{
    let item = document.getElementById('todo').value;
    itemList.push(item);
    console.log(itemList);
    document.getElementById('todo').value="";
}
document.getElementById('btn2').addEventListener('Click',addItem);