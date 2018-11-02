function SideBarMenu () {
    this.isOpen = true
    this.isOnTheLeft = true
    this.isOnTheRight = false
    this.bgColor = 'red'
 
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