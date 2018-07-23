class TaskList {
  static submitHandler(e) { //element on the page e that was submitted
    e.preventDefault();
    //prevents page from refreshing when adding a new task
    const taskList = e.target.querySelector('[name="new-task-description"]').value;
    //the element's target === <form></form>,
    // querySelector goes into it and picks out the input which is [name='new-task-description'].value

    const newTaskTemplate = `<li>${taskList}<button class="delete">x</button></li>`;
    //creates a template for how our new task looks and where it goes in the page; also uses the input from client

    const tasks = document.querySelector('#tasks');
    //puts the template where you want it in #task or the ul but it if you use 'ul'
    // it'll return the first <ul>
    tasks.innerHTML += newTaskTemplate
    //appends it to the page
  };
}
