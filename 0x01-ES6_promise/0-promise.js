/* 0-promise.js */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      /* Assuming the API call is successful, resolve the Promise with a response */
      resolve({ data: 'Some data from API' });
    }, 2000); // Simulating a 2-second delay
  });
}
