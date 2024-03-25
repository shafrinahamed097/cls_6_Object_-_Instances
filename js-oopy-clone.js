const person = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    greet() {
        return `WelCome ${this.fullName()}!`;

    }
}

const person1 = Object.create(person); // clone Object
const person2 = Object.create(person);

person2.firstName = 'Jane';

console.log(person1.firstName);
console.log(person2.firstName);