function SideBarMenu (color, direction) {
    this.isOpen = true
    this.isOnTheLeft = direction === 'left' ? true : false
    this.isOnTheRight = direction === 'right' ? true : false
    this.bgColor = color || 'red'
    if (!this.isOnTheLeft && !this.isOnTheRight) {
        this.isOnTheLeft = true
    }
 
 }
 
 SideBarMenu.prototype.renderFunction = function() {
     const menuDiv = document.createElement('div')

     // Add styles here!

     document.body.appendChild(menuDiv)
     menuDiv.style.backgroundColor = this.bgColor
     menuDiv.style.height = '100vh'
     menuDiv.style.width = '200px'
     menuDiv.style.position = 'fixed'
     menuDiv.style.top = '0'
    
     if (this.isOnTheLeft) menuDiv.style.left = '0'
     if (this.isOnTheRight) menuDiv.style.right = '0'
     if (!this.isOpen) menuDiv.style.display = 'none'

 };
 
 
 const menu1 = new SideBarMenu()

 menu1.renderFunction()

 const menu2 = new SideBarMenu('green', 'right');

 menu2.renderFunction()