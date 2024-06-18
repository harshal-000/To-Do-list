let create = document.querySelector("#Create");
let tasks = document.querySelector("#tasks");
let hide = document.querySelector("#hide");
const list = document.querySelector("#task-list");

hide.addEventListener("click",()=>{
    tasks.classList.toggle('hidden');
})

create.addEventListener("click", () => {
  createtask();
  document.querySelector("#tskip").value = "";
});

function createtask() {
  let input = document.querySelector("#tskip").value;
  if (input === "") {
    alert("plz enter the task");
  } else {
    let newli = document.createElement("li");
    newli.innerHTML = `<i class="fa-regular fa-circle"></i> ${input}`;
    let delet = document.createElement("span");
    delet.innerHTML = "&#x2715;";
    list.appendChild(newli);
    newli.appendChild(delet);
    saveData();
  }
}

tasks.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    if (e.target.firstChild.classList.contains("fa-circle")) {
      e.target.firstChild.classList.remove("fa-circle");
      e.target.firstChild.classList.add("fa-circle-xmark");
      saveData();
    } else{
      e.target.firstChild.classList.remove("fa-circle-xmark");
      e.target.firstChild.classList.add("fa-circle");
      saveData();
    }
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
  else{
    return
  }
});



function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function display(){
    list.innerHTML=localStorage.getItem("data");
}

display();