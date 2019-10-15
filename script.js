function add (...x) {
    let result = x.reduce(function(total, curr) {
        return total + curr;
    }, 0);
    return result;
}

function subtract (...x) {
    let result = x.reduce(function(total, curr) {
        return total - curr;
    });
    return result;
}

function multiply (...x) {
    let result = x.reduce(function(total, curr) {
        return total * curr;
    }, 1);
    return result;
}

function divide (...x) {
    let result = x.reduce(function(total, curr) {
        return total/curr;
    });
    return result;
}

function operator (operator, num1, num2) {
    return operator(num1, num2);
}