const container = document.querySelector('.container');

const createGrid = (rows = 16, columns = 16) => {
    for (let i = 0; i < rows * columns; i++) {
        const grid = document.createElement('div');
    
        const height = Math.ceil(768 / rows); 
        const width = Math.ceil(768 / columns);

        grid.style.width = `${width}px`; 
        grid.style.height = `${height}px`; 
    
        grid.classList.add('grid');
    
        container.appendChild(grid);
    
        grid.addEventListener("mouseover", (event) => {
            grid.style.backgroundColor = 'black';
        })
    }
    

}

createGrid();

const resetGrid = () => {
    const gridNode = document.querySelectorAll('.grid');
    gridNode.forEach(node => {
        container.removeChild(node);
    })
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
    const rows = prompt('Number of rows? (100 row limit)')
    const columns = prompt('Number of columns? (100 column limit)')
    resetGrid();
    createGrid(parseInt(rows), parseInt(columns));
})



// number of rows and columns input popup
// divide rows with height of container
// divide columns with width of container


