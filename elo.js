function createBoard(num) {


    let output = '';
    
    function createLine1() {

        let line1Outy = '';

        for (let i=0; i<num; i++) {
            if (i%2===0) {
                line1Outy+='#'
            } else {
                line1Outy+=' '
            };
        }

        return line1Outy +'\n';
    }
    function createLine2() {

        let line1Outy = '';


        for (let i=0; i<num; i++) {
            if (i%2!==0) {
                line1Outy+='#'
            } else {
                line1Outy+=' '
            };
        }

        return line1Outy +'\n';
    }

    for (let i=1; i<num+1; i++) {
        if (i%2===0) {
           output += createLine1(num)
        } else {
           output += createLine2(num)
        }
    }

    console.log(output);
}

// console.log(0%2===0)


// createBoard(8);


function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)

// console.log(wrap1());
// console.log(wrap2());


let flow = '';
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        const reter = power(base, exponent - 1)
        flow+=`${base}*${reter} `;
        console.log(flow);
        return base * reter
    }
}

console.log(power(3, 4));


// 2 * power(2, 3)
//       2 * power(2, 2)
//          2 *  power(2, 1)   // 
//             2 * power(2, 0)  // 2

                

const checkIfEven = function(num) {
    if (num === 0) return true;
    if (num ===1) return false;
    if (num < 0) {
        return checkIfEven(num + 2)
    }
    return checkIfEven(num - 2);
}

// console.log(checkIfEven(-11));


const countChar = function(str, letter) {
    let count = 0;
    for (const lettt of str) {
        if (lettt === letter) count++;
    }
    return count
}

console.log(countChar('this is a string that i am passing', 'I'));



