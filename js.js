document.addEventListener('DOMContentLoaded', () => {
// Executes script after content is loaded on webpage
    const gridContainer = document.getElementById("container");
    for (let i = 0; i < 256; i++) {
        // loop will run 256x as 16 * 16 = 256
        const squareDiv = document.createElement("div");
        squareDiv.classList.add('squareDiv');
        gridContainer.appendChild(squareDiv);

        squareDiv.addEventListener('mouseout', () => {
            let letters = '0123456789ABCDEF';
            let color = '#'
            squareDiv.style.backgroundColor = 'blue';
        })
    }
    
    // const button = document.querySelector('#btn');

  

});

