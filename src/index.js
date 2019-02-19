import { generateMagicSquare } from './generateSquare';
import { generateTable } from './generateTable';
import { flatted } from './utils';

const tableRootEncrypt = document.getElementById('tableRootEncrypt');
const tableRootDecrypt = document.getElementById('tableRootDecrypt');

const sourceArea = document.getElementById("source");
const cryptedArea = document.getElementById("crypted");
const encryptedArea = document.getElementById("encrypted");

const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");

const generateKeyButton = document.getElementById("generateKey");

const clearNode = node => {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    };

    return node;
}

let currentEncryptKey = [];
let currentDecryptKey = [];

function generateDecryptTable() {
    const table = generateTable(currentDecryptKey, (value, row, column) => {
        const input = document.createElement('input');
        input.addEventListener('change', (e) => {
            currentDecryptKey[row][column] = parseInt(e.target.value);
        });
        input.value = value;
        input.className = 'input';

        return input;
    });
    clearNode(tableRootDecrypt).appendChild(table);
}

encryptButton.addEventListener('click', () => {
    const text = sourceArea.value;
    const flattenKey = flatted(currentEncryptKey);
    const result = flattenKey.map(idx => text[idx - 1]).join('');
    cryptedArea.value = result;

    currentDecryptKey = JSON.parse(JSON.stringify(currentEncryptKey));
    generateDecryptTable();
});

decryptButton.addEventListener('click', () => {
    const text = cryptedArea.value;
    const flattenKey = flatted(currentDecryptKey);
    const result = text.split('').reduce((acc, char, i) => {
        acc[flattenKey[i] - 1] = char;
        return acc;
    }, Array(text.length)).join('');
    encryptedArea.value = result;
});

generateKeyButton.addEventListener('click', () => {
    const text = sourceArea.value;
    const size = Math.sqrt(
        Math.pow(
            Math.floor(Math.sqrt(text.length)),
            2
        )
    );

    currentEncryptKey = generateMagicSquare(size);

    const table = generateTable(currentEncryptKey);
    clearNode(tableRootEncrypt).appendChild(table);
});