export default async function handleResponseFromAPI(promise) {
  try {
    const response = await promise;
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success',
      response,
    };
  } catch (error) {
    return new Error('The fake API is not working currently');
  }
}
