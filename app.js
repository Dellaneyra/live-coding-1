function bigWords (inputString, inputArray){ //funcion para llamar dos parametros (input string es una cadena de texto, e input array es una array de cadenas de texto)
    return inputArray.filter(word => word.length > inputString.length); //el metodo filer se utilza para filtrar 
}

//funcion para imprimir array en html
function printArray (inputArray){
    const ulElement = document.createElement('ul');
    inputArray.forEach(word => {
        const liElement = document.createElement('li');
        liElement.textContent = word;
        ulElement.appendChild(liElement);
    });
    document.body.appendChild(ulElement);
}

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const resultArray = bigWords('bocina', myArray);
printArray(resultArray);