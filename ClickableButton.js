function ClickableButton(label, handler) {
    this.label = label
    this.handler = handler

    this.renderFunction()
}


ClickableButton.prototype.renderFunction = function () {
    this.menuButton = document.createElement('button')

    this.label = document.createTextNode(`${this.label}`)

    this.menuButton.style.top = '200px'
    this.menuButton.style.left = '200px'
    this.menuButton.style.height = '200px'
    this.menuButton.style.width = '400px'
    this.menuButton.style.backgroundColor = 'red'

    this.menuButton.addEventListener('click', () => {
        this.handler (this.handler)
    })

    this.menuButton.appendChild(this.label)

    document.body.appendChild(this.menuButton)
}
