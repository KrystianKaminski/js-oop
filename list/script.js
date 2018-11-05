class ToDo {
    constructor() {
        this.tasks = []
        this.render()
    }

    addTask(text) {
        this.tasks.push(new Task(text))
        this.render()
      }
    render() {
        document.body.innerHTML = ""
        this.makeUI()
        const ul = document.createElement("ul")
        this.tasks.forEach(task => {
            const li = document.createElement("li")
            li.innerText = task.text
            ul.appendChild(li)
        })
        document.body.appendChild(ul)
    }
    deleteAll() {
        document.body.innerHTML = ""
        this.tasks = []
        this.makeUI()
    }

    makeUI() {
        const input = document.createElement('input')
        const button = document.createElement('button')
        const button1 = document.createElement('button')

        button.innerText = 'Click here'
        button1.innerText = 'Delete all'
            button.addEventListener('click', () => {
                this.addTask(input.value)
            })
            button1.addEventListener('click', () => {
                this.deleteAll()
            })

        document.body.appendChild(input)
        document.body.appendChild(button)
        document.body.appendChild(button1)
    }

}
class Task {
    constructor(text) {
        this.text = text
    }
}


const a = new ToDo();
