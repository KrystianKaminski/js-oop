function ToDo() {
    this.tasks = []
}

function Task(text) {
    this.text = text
}


ToDo.prototype.addTask = function(text) {
    this.tasks.push(new Task(text))
}

ToDo.prototype.render = function() {
    document.body.innerHTML = ''

    this.tasks.forEach(task => {
        const div = document.createElement('div')
        div.innerText = task.text
        document.body.appendChild(div)
    })
}

const a = new ToDo()

a.addTask('text')
a.addTask('text')
a.addTask('text')
a.addTask('text')
a.addTask('text')
a.addTask('text')
a.addTask('text')
a.addTask('text')

a.render()