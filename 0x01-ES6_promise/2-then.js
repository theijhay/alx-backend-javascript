// 2-then.js
export default function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success', response };
    })
    .catch(() => new Error());
}
