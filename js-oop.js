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

console.log(person.greet());