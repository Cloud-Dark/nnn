const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
module.exports = randomNumberGenerator;