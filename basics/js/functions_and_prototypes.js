// Create self-executing or auto-invocation function
(function() {
  console.log('This is line will be run as soon as the script is created');
})();

// Adding functions to prototypes 
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.getName = function() {
  return `Make: ${this.make} - Model: ${this.model} - Year: ${this.year}`;
}

console.log((new Car("vietnam", "VF", "2024")).getName());