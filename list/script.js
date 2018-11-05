
class ToDo {
    constructor() {
        this.tasks = []
        this.render()
    }
}

class Task {
    constructor(text) {
        this.text = text
    }
}


ToDo.prototype.addTask = function(text) {
  this.tasks.push(new Task(text));
  this.render();
};

ToDo.prototype.render = function() {
    document.body.innerHTML = "";
    this.makeUI()
    const ul = document.createElement("ul");
    this.tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerText = task.text;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
};

ToDo.prototype.makeUI = function() {
    const input = document.createElement('input')
    const button = document.createElement('button')

    button.innerText = 'Click here'
        button.addEventListener('click', () => {
            this.addTask(input.value)
        })

    document.body.appendChild(input)
    document.body.appendChild(button)
}

const a = new ToDo();

// a.addTask("text");
// a.addTask("text");
// a.addTask("text");
