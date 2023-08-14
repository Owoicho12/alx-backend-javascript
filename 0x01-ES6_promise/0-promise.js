function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      const success = true; // Change this based on your API response
      if (success) {
        const responseData = {
          status: 200,
          data: 'API response data'
        };
        resolve(responseData);
      } else {
        reject(new Error('API request failed'));
      }
    }, 1000); // Simulating a 1-second delay for the API call
  });
}
