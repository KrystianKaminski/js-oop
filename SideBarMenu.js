(function() {

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


    function SideBarMenu (color, direction) {
        this.isOpen = true
        this.isOnTheLeft = direction === 'left' ? true : false
        this.isOnTheRight = direction === 'right' ? true : false
        this.bgColor = color || 'red'
        this.menuDiv = null
        if (!this.isOnTheLeft && !this.isOnTheRight) {
            this.isOnTheLeft = true
        }
        
        this.init()
    }
    
    SideBarMenu.prototype.renderFunction = function() {
        if (this.menuDiv) this.menuDiv.remove()
        this.menuDiv = document.createElement('div')

        // Add styles here!

        document.body.appendChild(this.menuDiv)
        this.menuDiv.style.backgroundColor = this.bgColor
        this.menuDiv.style.height = '100vh'
        this.menuDiv.style.width = '200px'
        this.menuDiv.style.position = 'fixed'
        this.menuDiv.style.top = '0'
        
        if (this.isOnTheLeft) this.menuDiv.style.left = '0'
        if (this.isOnTheRight) this.menuDiv.style.right = '0'
        if (!this.isOpen) this.menuDiv.style.display = 'none'

    };

    SideBarMenu.prototype.init = function() {
        new ClickableButton(
            'Toggle Menu',
            this.toggleMenu.bind(this)
        )
        this.renderFunction()
    }

    SideBarMenu.prototype.toggleMenu = function() {
        this.isOpen = !this.isOpen
        this.renderFunction()
    }

    window.SideBarMenu = SideBarMenu

})();