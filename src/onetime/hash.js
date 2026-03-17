// hash.js
const bcrypt = require('bcrypt');

const password = 'Comfort@1995.'; // Replace with your actual password
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Your Hashed Password:");
  console.log(hash);
});