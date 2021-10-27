/*
1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
*/

const createNewArray = (num, letter) => {
    var array = [];

    for (i = 0; i < num; i++) {
        array[i] = letter
    }
    return array;
}

var num = 3;
var letter = 'a';
console.log(`\nMétodo 1: (${num}, ${letter})`);
console.log(createNewArray(num, letter));

/*
2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
*/

const reverseArray = (array) => {
    var newArray = [];
    var j = 0;

    for (i = array.length - 1; i >= 0; i--) {
        newArray[j] = array[i];
        j++;
    }
    return newArray;
}

var array = [1, 2, 3, 4];
console.log(`\nMétodo 2: (${array})`);
console.log(reverseArray(array));

/*
3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
*/

const cleanUnnecessaryItemsArray = (items) => {
    var newItems = items.filter(value => value > 0);

    return newItems;
}

var array = [1, 2, '', undefined];
console.log(`\nMétodo 3: (${array})`);
console.log(cleanUnnecessaryItemsArray(array));

/*
4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do método: {c:2, d:4}
*/

const convertArrayToObject = (array) => {
    var obj = {};

    array.map((value) => {
        var key = value[0];
        var value = value[1];
        obj = {
            ...obj,
            [key]: value
        }
    })
    return obj;
}

var array1 = ['c', 2];
var array2 = ['d', 4];
console.log(`\nMétodo 4: (${array1}, ${array2})`);
console.log(convertArrayToObject([array1, array2]));

/*
5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
*/

const arrayFilter = (array, filter1, filter2) => {
    var newArray = array.filter(value => (value !== filter1 && value !== filter2));

    return newArray;
}

var array = [5, 4, 3, 2, 5];
var filter1 = 5;
var filter2 = 3;
console.log(`\nMétodo 5: (${array}, ${filter1}, ${filter2})`);
console.log(arrayFilter(array, filter1, filter2));

/*
6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
*/

const arrayWithoutDuplicating = (array) => {
    var newArray = [...new Set(array)];

    return newArray;
}

var array = [1, 2, 3, 3, 2, 4, 5, 4, 7, 3];
console.log(`\nMétodo 6: (${array})`);
console.log(arrayWithoutDuplicating(array));

/*
7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
*/

const compareArrays = (array1, array2) => {
    if (array1.length === array2.length) {
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true
    }
    return false;
}

var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4];
console.log(`\nMétodo 7: (${array1}, ${array2})`);
console.log(compareArrays(array1, array2));

/*
8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
*/

const removeNestingFromAnArrayOfArrays = (array) => {
    return [].concat.apply([], array)
}

var array = [1, 2, [3], [4, 5]];
console.log(`\nMétodo 8: (${array})`);
console.log(removeNestingFromAnArrayOfArrays(array));

/*
9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
*/

const splitArray = (array, num) => {
    var newArray = [];
    for (var i = 0; i < array.length; i = i + num) {
        newArray.push(array.slice(i, num + i));
    }
    return newArray;
}

var array = [1, 2, 3, 4, 5];
var num = 2;
console.log(`\nMétodo 9: (${array}, ${num})`);
console.log(splitArray(array, num));

/*
10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
*/

const findCommonValue = (array1, array2) => {
    return array1.filter(value => array2.includes(value));
}

var array1 = [6, 8];
var array2 = [8, 9];
console.log(`\nMétodo 10: (${array1}, ${array2})`);
console.log(findCommonValue(array1, array2));
