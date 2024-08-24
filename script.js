const container = document.querySelector("#container");
const inputBtn=document.querySelector(".inptbtn");

function createGrid(times) {
    if (times > 100) return alert("Input Exceeds the Maximum Input");
    container.innerHTML = '';
    
    for (let i = 0; i < times * times; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-item");

        // Add mouseover event listener to change color on hover
        grid.addEventListener("mouseover", function() {
            grid.style.backgroundColor = "black"; 
        });

        container.appendChild(grid);
    }
}

createGrid(16);

