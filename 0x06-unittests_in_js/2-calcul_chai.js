// test using Chai assertion library

function calculateNumber(type, a, b) {
    a = Math.round(a);
    b = Math.round(b);

    switch (type) {
        case 'SUM':
            return a + b;
        case 'SUBTRACT':
            return a - b;
        case 'DIVIDE':
            return b === 0 ? 'Error' : a / b;
        default:
            throw new Error('Invalid type');
    }
}

export { calculateNumber };