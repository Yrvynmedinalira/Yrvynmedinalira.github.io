let addToDoButton = document.getElementById('addToDo');
let toDo = document.getElementById('toDo');
let field = document.getElementById('field');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = field.value;
    toDo.appendChild(paragraph);
    field.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
})
paragraph.addEventListener('dbclick', function(){
    toDo.removeChild(paragraph);
})
})