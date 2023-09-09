 /*
  1. create an li element for each task
  2. on click add the li element to the ul
  3. create an li element and add:
        -span element with the task value
        -delete btn
        -edit btn      
  */

document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  e.preventDefault()
  let task = document.getElementById('new-task-description')
  let form = document.querySelector('form')
  let ul = document.querySelector('ul')
  //this liArray is to know whether or not there are exisiting li's and to iterate 
  //through them to know what number id to set the new li element to when a task is 
  //added to the todo list
  let liArray = []

  form.addEventListener('submit', (e)=>{
    //each li has to have it's own id number
    e.preventDefault()
    let count = 1
     //create element
    let li = document.createElement('li')
    let deleteBtn = document.createElement('button')
    let editBtn = document.createElement('button')
    let spanTask = document.createElement('span')
    //set values to elements
    spanTask.textContent = `${task.value} `
    deleteBtn.textContent = ' x '
    editBtn.textContent = ' edit '
    /**
     * we want to set an individual id for each li
     */
    //check if there is any li's
    //if there is no li's add an id to the li and set it to the count number
    if(liArray.length === 0){
      //add an id to the li element
      li.id = count
      //add li to liArray
      liArray.push(li)
    }else{
      count = liArray.length + 1
      li.id = count
      //add new li to liArray
      liArray.push(li)
    }
    //append elements
    li.appendChild(spanTask)
    li.appendChild(deleteBtn)
    li.appendChild(editBtn)
    ul.appendChild(li)
    task.value = ''
    //handle delete
    deleteBtn.addEventListener('click',()=>handleDelete(li))
    //handle edit
    editBtn.addEventListener('click', ()=>handleEdit(li, deleteBtn))
  })
 
  
function handleDelete(element){
  element.remove()
}

function handleEdit(element, siblingElement){
  /*
  -create an input and save button
  -get the value of the span and put it inside the input
  -remove the original text from the span so that it won't be on the left side 
    of the input
  -when we click on the save button
   --add the new text to the span 
   --remove the input and save button
  */
  //create an input and save button
  let editInput = document.createElement('input')
  let saveBtn = document.createElement('button')
  //get the li id
  let elementId = element.id
  //get the span element from the li
  let span = document.getElementById(elementId).children[0]
  //set edit input type
  editInput.setAttribute('type','text')
  saveBtn.textContent = ' save '
  //places the save btn before the delete btn
  siblingElement.insertAdjacentElement("beforebegin", saveBtn)
  //places the editInput before the savebtn
  saveBtn.insertAdjacentElement("beforebegin", editInput)
  //get the value of span
  let spanValue = span.textContent
  //place span value inside input
  editInput.value = spanValue
  //remove the original span
  span.remove()
  //save changes
  saveBtn.addEventListener('click',()=>{
   //get the new value from the input
    let valueInput = editInput.value
    //create a new span element 
    let span = document.createElement('span')
    //add the new value from the input to the span element
    span.textContent = `${valueInput} `
    //add the created span before the delete button
    siblingElement.insertAdjacentElement('beforebegin', span)
    //remove the edit input and saved button
    editInput.remove()
    saveBtn.remove()
  })
}


});
