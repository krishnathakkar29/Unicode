

const url = window.location.href;
const urlSplit = url.split("/");
let toDosLink = urlSplit[urlSplit.length-1];
let finalUserNo = toDosLink.slice(18,20);
console.log(finalUserNo);

fetch(`https://jsonplaceholder.typicode.com/todos?userId=${finalUserNo}`)
.then( (response) => {
    return response.json();
})
.then ((todos) => {
    let todosTable = document.getElementById("todosTable");
    generateTodoRows(todosTable, todos);
})
.catch( (error) => {
    console.log("E: " + error);
})

function generateTodoRows(todosTable, todos)
{

    for(let hihi of todos)
    {
        let headingDiv = document.getElementById("heading");
        let heading = document.createElement("h1");
        heading.innerHTML = `ToDoList of User Number- ${hihi.userId}`;
        headingDiv.appendChild(heading);
        break;
    }
    
    for(let key of todos)
    {
        let row = todosTable.insertRow();

        let srCell = row.insertCell();
        srCell.textContent = key.id;

        let titleCell = row.insertCell();
        titleCell.textContent = key.title;

        let completedCell = row.insertCell();
        completedCell.textContent = key.completed ? "true" : "false";

        let addButton = row.insertCell();
        let createButton = document.createElement("button");
        createButton.textContent = "+";
        createButton.className = "btn"
        addButton.appendChild(createButton);

        let delButton = row.insertCell();
        let createDelButton = document.createElement("button");
        createDelButton.textContent = "X";
        createDelButton.className = "btn"
        delButton.appendChild(createDelButton);
    }
}