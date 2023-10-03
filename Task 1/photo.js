const url = window.location.href;
const urlSplit = url.split("/");
// console.log(urlSplit);
let toDosLink = urlSplit[urlSplit.length-1];
// console.log(toDosLink);
let finalUserNo = toDosLink.slice(18,20);
console.log(finalUserNo);

fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${finalUserNo}`)
.then( (response) => {
    return response.json();
})
.then( (photos) => {
    let container = document.getElementById("container");

    for(let hihi of photos)
    {
        let headingDiv = document.getElementById("heading")
        const head = document.createElement("h1");
        head.innerHTML = `Photos of Album Number - ${hihi.albumId}`;
        headingDiv.appendChild(head);
        break; 
    }

    for (let hihi of photos) {
        
        const photoElement = document.createElement("img");
        photoElement.setAttribute("src", hihi.url);
  
        const written = document.createElement("p");
        written.textContent = ` ${hihi.id}`;
        written.id = "writtenId"
  
        const photoContainer = document.createElement("div");
        photoContainer.appendChild(photoElement);
        photoContainer.appendChild(written);
  
        container.appendChild(photoContainer);
      }
})
.catch( (error) => {
    console.log("E:" + error);
})