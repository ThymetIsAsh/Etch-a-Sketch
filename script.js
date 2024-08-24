const container = document.querySelector("#container");
const inputBtn=document.querySelector(".inptbtn");

function createGrid(times) {
    if (times > 100) return alert("Input Exceeds the Maximum Input");
    container.innerHTML = '';//Removes Existing Grids in container If there any
    
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

inputBtn.addEventListener("click",() =>{
    container.innerHTML = ''; //Removes Existing Grids in container
    let userInput=parseInt(prompt("Enter new grid size (maximum 100):",""));
    if (userInput && userInput > 0 && userInput <= 100) {
        createGrid(userInput);
    } else {
        alert("Invalid size! Please enter a number between 1 and 50.");
    }

});