export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success', response };
    })
    .catch((error) => {
      console.error(error); // Log the error for debugging
      return Promise.reject(new Error('The fake API is not working currently'));
    });
}
