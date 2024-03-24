class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    greet() {
        return `Welcome ${this.fullName()}! and your email address: ${this.email}`
    }
}

const person1 = new Person('Shafrin', 'Ahamed', 'shafirn@ahamed');
const person2 = new Person("Ahamed", 'Shafrin', 'Ahamed@Shafrin.com');

console.log(person1.greet());
console.log(person2.greet());