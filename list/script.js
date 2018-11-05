function ToDo() {
    this.tasks = []
}

function Task(text) {
    this.text = text
}

ToDo.prototype.addTask = function(text) {
    new Task(text)
    this.tasks.push(text)
}

ToDo.prototype.render = function() {
    const div = document.createElement('div')
    div.innerText = this.tasks
    document.body.appendChild(div)
}

const a = new ToDo()

a.addTask('task')
a.addTask('task')
a.addTask('task')

a.render()