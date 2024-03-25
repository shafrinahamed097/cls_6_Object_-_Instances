class Vehicle {
    constructor(brand) {
      this.brand = brand;
    }
  
    present() {
      return `I am a ${this.brand} vehicle`;
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, model) {
      super(brand);  // Call the parent class constructor
      this.model = model;
    }
  
    present() {
      return `I am a ${this.model} car from ${this.brand}`;
    }
  }
  
  const toyotaCamry = new Car("Toyota", "Camry");
  console.log(toyotaCamry.present()); // Output: "I am a Camry car from Toyota"
  
  // Here, Car inherits the `brand` property and `present` method from Vehicle.
  // Car also adds its own `model` property and overrides the `present` method
  // to provide more specific information.
  