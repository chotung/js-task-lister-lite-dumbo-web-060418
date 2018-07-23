// there is no database
document.addEventListener("DOMContentLoaded", init);
//starts the page ^

function init() {

  const taskForm = document.querySelector('form'); //selects the form block of code on the page

  taskForm.addEventListener('submit', TaskList.submitHandler)
  //uses the static method of submit handler to create new task

  document.body.addEventListener('click', Task.clickHandler)
  //adds an event to the delete button and actually deletes things off the page not the database
}
