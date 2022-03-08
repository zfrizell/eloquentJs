function noisy(f) {
    return function newFunc(...args) {
        console.log(f)
        console.log(args)
    }
}

noisy(Math.min)(3, 2, 1);


let array = [[1, 2, 3], [4, 7, 12], [7, 8, 9]];


function flat(arr) {
    console.log(arr)
    return arr.reduce((a, b) => a.concat(b), []);
}

// console.log(flat(array));

function zacksLoop(value, test, update, body) {
    for (let i of value) {
        if (test(i)) return false;
        update(body(i))
    }
}

function everything(arr, f) {
    for (let el of arr) {
        if (!f(el)) return false
    }
    return true
}

let arr4 = [5, 5, '23', 5, 4999];

console.log(everything(arr4, a => typeof a === 'number'));


function everythingSome(arr, f) {

    if (arr.some(f)) return true;
    return false;

}

// console.log(everythingSome(arr4, a => typeof a === 'number') && !everythingSome(arr4, a => typeof a !== 'number'));



