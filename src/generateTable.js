
const defaultGenerateItem = value => {
    const span = document.createElement('span');
    span.textContent = value;

    return span;
}


export function generateTable(square = [], generateItem = defaultGenerateItem) {
    const size = square.length;

    const root = document.createElement('table');

    for (let row = 0; row < size; row++) {
        const tr = document.createElement('tr');
        for (let column = 0; column < size; column++) {
            const td = document.createElement('td');
            const value = square[row][column];

            const content = generateItem(value, row, column);
            td.appendChild(content);
            tr.appendChild(td);
        }
        root.appendChild(tr);
    }

    return root;
}