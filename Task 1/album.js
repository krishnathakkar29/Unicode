const url = window.location.href;
const urlSplit = url.split("/");
let albumsLink = urlSplit[urlSplit.length-1];
let finalUserNo = albumsLink.slice(18,20);
console.log(finalUserNo);


fetch(`https://jsonplaceholder.typicode.com/albums?userId=${finalUserNo}`)
.then( (response) => {
    return response.json();
})
.then((latest) => {
    let albumTable = document.getElementById("albumsTable");
    console.log(latest);
    generateToRow(albumTable , latest);
})
.catch( (error) => {
    console.log("E: " + error);
})


function generateToRow(albumTable, latest) {
    for (let key of latest) {
        let row = albumTable.insertRow();

        let idCell = row.insertCell();
        idCell.textContent = key.id;

        let titleCell = row.insertCell();
        titleCell.textContent = key.title;

        let viewBtn = row.insertCell();
        let createViewBtn = document.createElement("button");
        createViewBtn.textContent = "View Photos";
        createViewBtn.className = "btn";

        createViewBtn.addEventListener("click", (e) => {
            // console.log(e.target);
            window.location.href = `photo.html?userId=${key.id}`;
        });

        viewBtn.appendChild(createViewBtn);
    }
}
