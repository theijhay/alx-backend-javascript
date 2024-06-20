// 6-payment_token.js

function getPaymentTokenFromAPI(success) {
    if (success) {
        return Promise.resolve({ data: 'Successful response from the API' });
    }
    // When success is false, the function does nothing (returns undefined)
}

module.exports = getPaymentTokenFromAPI;