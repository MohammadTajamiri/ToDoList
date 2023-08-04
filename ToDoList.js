const click = document.getElementById("click");
const body=document.getElementsByTagName("main")[0];
const form=document.getElementsByName("form")[0];
const list1=document.getElementById("mainList");

const color=(event)=>{
    const list1=document.getElementById("mainList");
    let input=document.getElementById("toDo");
    let newItem=document.createElement("li");
    newItem.innerHTML=input.value;
    list1.appendChild(newItem);
    saveData();
    //event.preventDefault();//It stops from Refreshing the Page after Changing to The Dom
};

click.addEventListener("click",color,false);
function saveData(){
    localStorage.setItem("data",list1.innerHTML);
}
function showData(){
    list1.innerHTML=localStorage.getItem("data");
}
showData();
