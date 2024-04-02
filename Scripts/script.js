function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.substring(1,input.length);
}

function reverseString(input)  {
    let returnValue = "";
    for (let i = input.length - 1; i >= 0; i--) {
        returnValue += input.charAt(i);
    }
    return returnValue;
}

const calculator = {
    add: (x,y) => {
        return x + y;
    },
    subtract: (x,y) => {
        return x - y;
    },
    multiply: (x,y) => {
        return x*y;
    },
    divide: (x,y) => {
        return x / y;
    }
};

function caesarCipher(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        let currentCharKeyCode = input.charCodeAt(i);
        if ((currentCharKeyCode >= 97 && currentCharKeyCode <= 122) || (currentCharKeyCode >= 65 && currentCharKeyCode <= 90)) {
            currentCharKeyCode += 3;
            if (currentCharKeyCode > 122) {
                currentCharKeyCode -= 26;
            }
        }
        output += String.fromCharCode(currentCharKeyCode);
    }
    return output;
}

function analyzeArray(arr) {
    if (arr === undefined) arr = [];
    return {
        average: Math.floor(arr.reduce((prev,current) => prev+current,0) / arr.length),
        min: returnMin(arr),
        max: returnMax(arr),
        length: arr.length
    };
}

function returnMin(arr) {
    let returnValue = arr[0] || 0;
    for (const num of arr) {
        if (num < returnValue) {
            returnValue = num;
        }
    }
    return returnValue;
}

function returnMax(arr) {
    let returnValue = arr[0] || 0;
    for (const num of arr) {
        if (num > returnValue) {
            returnValue = num;
        }
    }
    return returnValue;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };