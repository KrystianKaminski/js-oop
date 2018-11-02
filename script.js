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
     menuDiv.style.height = '300px'
 };
 
 
 const menu1 = new SideBarMenu()

 menu1.renderFunction()