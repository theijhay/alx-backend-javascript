// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        // Create a spy for console.log before each test
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the spy after each test
        consoleLogSpy.restore();
    });

    it('should log "The total is: 120" for inputs 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log is called with the correct message
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

        // Verify that console.log is only called once
        expect(consoleLogSpy.calledOnce).to.be.true;
    });

    it('should log "The total is: 20" for inputs 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        // Verify that console.log is called with the correct message
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

        // Verify that console.log is only called once
        expect(consoleLogSpy.calledOnce).to.be.true;
    });
});