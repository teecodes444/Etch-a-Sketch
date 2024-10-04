document.addEventListener('DOMContentLoaded', () => {

    const gridContainer = document.getElementById("container");
    for (let i = 0; i < 256; i++) {
        // loop will run 256x as 16 * 16 = 256
        const squareDiv = document.createElement("div");
        squareDiv.classList.add('squareDiv');
        gridContainer.appendChild(squareDiv);
    }
    
});