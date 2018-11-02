function ClickableButton(label, handler) {
    this.label = label
    this.handler = handler
    this.renderFunction()
}


ClickableButton.prototype.renderFunction = function () {
    const button = document.createElement('button')
    button.innerText = this.label
    button.addEventListener('click', this.handler)
    document.body.appendChild(button);
}
