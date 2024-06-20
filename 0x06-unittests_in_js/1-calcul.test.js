// Combining descriptions

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return 6 when inputs are 1.4 and 4.5', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 5 when inputs are 1.2 and 3.7', function() {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });
    });

    describe('SUBTRACT', function() {
        it('should return -4 when inputs are 1.4 and 4.5', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return -2 when inputs are 1.2 and 3.1', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.1), -2);
        });
    });

    describe('DIVIDE', function() {
        it('should return 0.2 when inputs are 1.4 and 4.5', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return Error when rounded b is 0', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return 1 when inputs are 4.5 and 4.5', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 4.5, 4.5), 1);
        });
    });

    describe('Invalid type', function() {
        it('should throw an error for invalid type', function() {
            assert.throws(() => calculateNumber('INVALID', 1, 2), {
                name: 'Error',
                message: 'Invalid type'
            });
        });
    });
});