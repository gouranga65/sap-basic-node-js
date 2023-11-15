const fukiFuki = require("./reuse");
fukiFuki.addNumber(20, 30);
fukiFuki.getSizeArray(["Saab", "Volvo", "BMW"]);
fukiFuki.printArray(["Saab", "Volvo", "BMW"]);
fukiFuki.printJson({ firstName: "John", lastName: "Doe" });

this.tax = 100;

function nameOne() {
  console.log(this.tax);
}
nameOne();
nameTwo = () => {
  console.log(this.tax);
};
nameTwo();
