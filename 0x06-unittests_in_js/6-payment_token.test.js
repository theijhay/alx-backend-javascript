// 6-payment_token.test.js

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((result) => {
                expect(result).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });

    it('should do nothing when success is false', (done) => {
        const result = getPaymentTokenFromAPI(false);
        expect(result).to.be.undefined;
        done();
    });
});