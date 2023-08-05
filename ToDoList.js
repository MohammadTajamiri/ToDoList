const click = document.getElementById("click");
const body=document.getElementsByTagName("main")[0];
const form=document.getElementsByName("form")[0];

const addTask=(event)=>{
    const list1=document.getElementById("mainList");
    let input=document.getElementById("toDo");
    let newItem=document.createElement("li");
    newItem.innerHTML=input.value;
    list1.appendChild(newItem);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    newItem.appendChild(span);
    saveData();
    //event.preventDefault();//It stops from Refreshing the Page after Changing to The Dom
};
const list1=document.getElementById("mainList");
list1.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

click.addEventListener("click",addTask,false);
function saveData(){
    localStorage.setItem("data",list1.innerHTML);
}
function showData(){
    list1.innerHTML=localStorage.getItem("data");
}
 //showData();
