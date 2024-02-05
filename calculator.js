function add(num1, num2) {
    const total = num1 + num2;
    return total;
}
function substract(num1, num2) {
    const total = num1 - num2;
    return total;

}
function multiply(num1, num2) {
    const total = num1 * num2;
    return total;

}
function devide(num1, num2) {
    const total = num1 / num2;
    return total;

}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'substract') {
        const result = substract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'devide') {
        const result = devide(a, b);
        return result;
    }
    else {
        return "only 'add' 'substract' 'multiply' 'devide' operation are allowed "
    }

}

const result=calculator(5,7, 'add');
console.log(result);

