const { User } = require('../models');

const userData = [
  {
    username: "ericrocks2000",
    email: "ericrocks2000@gmail.com",
    password: "password123"
  },
  {
    username: "kaylaisawesome",
    email: "kaylaisawesome@gmail.com",
    password: "password123"
  },
  {
      username: "jacobiscool24",
      email: "jacobiscool24@yahoo.com",
      password: "password123"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;