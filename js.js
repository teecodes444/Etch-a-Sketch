document.addEventListener('DOMContentLoaded', () => {
// Executes script after content is loaded on webpage
    const gridContainer = document.getElementById("container");
    const button = document.querySelector('#btn');
    const conatinerSize = 940;
    // total size of container

    
    function gridSize(size) {
        
        const squareSize = conatinerSize / size;
        gridContainer.innerHTML = '';
        // to clear existing grid
        gridContainer.style.width = `${conatinerSize}px`;
        gridContainer.style.height = `${conatinerSize}px`;

        for (let i = 0; i < size * size; i++) {
            
            const squareDiv = document.createElement("div");
            squareDiv.classList.add('squareDiv');
            squareDiv.style.width = `${squareSize}px`;
            squareDiv.style.height = `${squareSize}px`;
            gridContainer.appendChild(squareDiv);

            squareDiv.addEventListener('mouseover', () => {
                function randomColor() {
                    let letters = '0123456789ABCDEF';
                    // contains all possible characters for hexidecimal color code
                    let color = '#'
                    // color codes start with #
                    for (let i = 0; i < 6; i++) {
                        // hexidecimal codes contain 6 characters
                        color += letters[Math.floor(Math.random() * 16)];
                        // there are 16 possible characters in hexidecimal code
                    }
                    return color;
                }
                squareDiv.style.backgroundColor = randomColor();
            });
            
        }; 

    };

    button.addEventListener('click', () => {
        let size = parseInt(prompt("Enter grid size (1 - 100)"));
        if (size > 0 && size < 100) {
            gridSize(size);
        } else {
            alert('Please enter a number between 1 - 100. Try Again.')
        }
    
    })

    gridSize()
});

