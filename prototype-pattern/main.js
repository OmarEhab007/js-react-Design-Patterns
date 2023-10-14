// prototype pattern

class User {
  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.fullName = `${firstName} ${lastName}`;
  }

  checkLastOnline() {
    console.log(`User ${this.fullName} is online at ${Date.now()}`);
  }

  sendEmail() {
    console.log(`Email sent to ${this.email}`);
  }

  deleteUser() {
    console.log(`User ${this.fullName} deleted`);
  }

}

const user1 = new User({
  firstName: 'John',
  lastName: 'Doe',
  email: 'dn1hY@example.com',
});

const user2 = new User({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'agQ8u@example.com',
});

// console.log(user1, user2)

console.log(user1.deleteUser === user2.deleteUser)

// the prototype pattern is more memory efficient than the constructor pattern or the factory pattern

