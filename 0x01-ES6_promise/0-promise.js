YourClass.prototype.getResponseFromAPI = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { data: 'Your API data here' };
      resolve(response);
    }, 2000);
  });
};
