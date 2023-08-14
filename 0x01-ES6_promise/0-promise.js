YourClass.prototype.getResponseFromAPI = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = getResponseFromAPI();
      resolve(response);
    }, 2000);
  });
};
