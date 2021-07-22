

function toggleNav() {
    var updateElement = document.getElementById("menu-icon");
var side = document.getElementById("side");
 //toggle adds a class if it's not there or removes it if it is.
 updateElement.classList.toggle("open");
 side.classList.toggle("open");  
}   