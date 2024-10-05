document.addEventListener('DOMContentLoaded', () => {
// Executes script after content is loaded on webpage
    const gridContainer = document.getElementById("container");
    const conatinerSize = 940;
    // total size of container

    function gridSize(size) {
        const squareSize = conatinerSize / size;
        gridContainer.style.width = `${conatinerSize}px`;
        gridContainer.style.height = `${conatinerSize}px`;
        for (let i = 0; i < 256; i++) {
            // loop will run 256x as 16 * 16 = 256
            const squareDiv = document.createElement("div");
            squareDiv.classList.add('squareDiv');
            squareDiv.style.width = `${squareSize}px`;
            squareDiv.style.height = `${squareSize}px`;
            gridContainer.appendChild(squareDiv);

            squareDiv.addEventListener('mouseover', () => {
                function randomColor() {
                    let letters = '0123456789ABCDEF';
                    let color = '#'
                    for (let i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                }
                squareDiv.style.backgroundColor = randomColor();
            });
            
        }; 
    };

    gridSize(16)
});

