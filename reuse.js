module.exports = {
  addNumber: function (a, b) {
    console.log(a + b);
  },
  getSizeArray: function (arr) {
    console.log(arr.length);
  },
  printArray: function (arr) {
    arr.forEach((element) => {
      console.log(element);
    });
  },
  printJson: function (object) {
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);
      }
    }
  },
};
