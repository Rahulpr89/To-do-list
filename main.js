 const toDoList=JSON.parse(localStorage.getItem('lists'))||[];
 renderList();
function renderList()
{ 
  
  let todoListElement="";
  for(let i=0;i<toDoList.length;i++)
  {
    const listObject=toDoList[i];
    const {name,dueDate}=listObject;
    const html=`
   <div class="eachList">
    <div class="task">${name}</div>
    <div class="dueDate">${dueDate}</div>
    <div>
      <button onclick="
        toDoList.splice(${i},1);
        renderList();" 
        class="deleteList"
      >Delete</button>
    </div>
    </div>
    `;
    todoListElement += html;
  }
  localStorage.setItem('lists',JSON.stringify(toDoList));
  document.querySelector(".list-area").innerHTML=todoListElement;

}
 

function addList()
{
  const inputElement=document.querySelector(".input-area");
   const name=inputElement.value;
   inputElement.value="";
  const dateElement=document.querySelector(".date-area");
   const dueDate=dateElement.value;
   dateElement.value="";
  toDoList.push(
    {
      name,
      dueDate
    }
  );
  renderList();
  localStorage.setItem('lists',JSON.stringify(toDoList));
}

