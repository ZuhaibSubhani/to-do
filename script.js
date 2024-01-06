
const tasks= [];

function addText(){
    const task= document.getElementById("inputTask").value;
    if(task.length==0){
        return;
    }
    tasks.push(task);
    renderTask();
}
function renderTask(){
    let node= "";
    tasks.forEach((elem, index) => {
        node += `
        <div class="task">
        <p>${elem}</p>
        <button index= "${index}"onclick="removeTask(${index})">DEL</button>
        </div>
        `;
      });
      const containor=document.getElementById("taskBox");
      containor.innerHTML=node;
  }
  function removeTask(index){
    tasks.splice(index,1);
    renderTask();

  }