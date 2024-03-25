class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    greet() {
        return `Welcome ${this.fullName()}! and It's your email address: ${this.email}`
    }
}

const Person1 = new Person("Shafrin", "Ahamed", "shafrin@ahamed.com");
const Person2 = new Person("Ahamed", "Shafrin", "ahamed@shafrin.com");

console.log(Person1.greet());
console.log(Person2.greet());