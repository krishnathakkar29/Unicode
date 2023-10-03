

let finalArr = [];
let mountains;
function getTitle(data) {
    mountains = data; // fetched array directly is in mountains
    // console.log(mountains);

    finalArr = Object.keys(mountains[0]).filter((val) => 
    {
        return val === "id" || val === "name" || val === "email";
    });
    // console.log(finalArr);
    // Final Arr has required keys 
}

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            const userTable = document.getElementById("userTable");
            getTitle(users);
            generateThead(userTable, finalArr);
            generateUserRows(userTable, users);
        })
        .catch(error => {
            console.error("Error fetching users: " + error);
        });



function generateThead(table, finalArr){
    let thead = table.createTHead(); //thead tag
    let row = thead.insertRow(); //tr
    for(let key of finalArr)
    {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    let todoTh = document.createElement("th");
    let todoText = document.createTextNode("Todo");
    todoTh.appendChild(todoText);
    row.appendChild(todoTh);

    let albumTh = document.createElement("th");
    let albumText = document.createTextNode("Album");
    albumTh.appendChild(albumText);
    row.appendChild(albumTh);
}

function generateUserRows(table, users) {
    for (let key of users) {
        let row = table.insertRow();

        let srNo = row.insertCell();
        srNo.textContent = key.id;

        let name = row.insertCell();
        name.textContent = key.name;

        let email = row.insertCell();
        email.textContent = key.email;

        let todoCell = row.insertCell();
        let todoButton = document.createElement("button");
        todoButton.className = "btn";
        todoButton.innerText = "Todo";
        todoButton.addEventListener("click", () => {
            window.location.href = `todos.html?userId=${key.id}`;
        });
        todoCell.appendChild(todoButton);

        let albumCell = row.insertCell();
        let albumButton = document.createElement("button");
        albumButton.className = "btn";
        albumButton.innerText = "Albums";
        albumButton.addEventListener("click", () => {
            window.location.href = `album.html?userId=${key.id}`;
        });
        albumCell.appendChild(albumButton);
    }
}






