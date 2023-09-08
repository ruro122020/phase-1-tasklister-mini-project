 /*
  1. get access to the due date, task, and priority values
  2. on click add the li element to the ul
  3. create an li element and add:
        -text input value
        -delete btn
        -edit btn
        -due date 
        -assign background color based on priority
  4. based on the priority color, set the li's from red to yellow to green
  */

document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  e.preventDefault()
  let task = document.getElementById('new-task-description')
  let submit = document.getElementById('submit').childNodes[1]
  let ul = document.querySelector('ul')
  //this liArray is to know whether or not there are exisiting li's and to iterate 
  //through them to know what number id to set the new li element to when a task is 
  //added to the todo list
  let liArray = []

  submit.addEventListener('click', (e)=>{
    //each li has to have it's own id number
    e.preventDefault()
    let count = 0
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
     * We just want to iterate through the li's to get the number id if li's already
     * exist and set the new li's with an id number
     */
    //check if there is any li's
    //if there is no li's add an id to the li and set it to the count number
    //if li's already exist, loop through the existing li's
    //when you iterate through the li's, get the id number and add it to the count
    //add 1 to the count then
    //set the new count number to the new li id
    //add the li to the array

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

  let span = document.querySelector('span')
  //set edit input type
  editInput.setAttribute('type','text')
  saveBtn.textContent = ' save '
  //places the save btn before the delete btn
  siblingElement.insertAdjacentElement("beforebegin", saveBtn)
  //places the input before the savebtn
  saveBtn.insertAdjacentElement("beforebegin", editInput)
  //get the value of span
  let spanValue = span.textContent
  //place span value inside input
  editInput.value = spanValue
  //reset the value of the span
  
  saveBtn.addEventListener('click',()=>{
    /*
    get the new value of the input
    create a span element
    set the value of the span element to the new value from our input
    remove the edit input and save btn
    append it to the li
    */
    let valueInput = editInput.value
    let span = document.createElement('span')
    span.textContent = `${valueInput} `
    siblingElement.insertAdjacentElement('beforebegin', span)
    editInput.remove()
    saveBtn.remove()
    
  })
}


});
