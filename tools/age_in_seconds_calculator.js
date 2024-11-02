const ageInSecondsCalculator = (birthDate) => {
    const birthTime = new Date(birthDate).getTime();
    const currentTime = Date.now();
    const ageInMilliseconds = currentTime - birthTime;
    return Math.floor(ageInMilliseconds / 1000); // Convert milliseconds to seconds
};
module.exports = ageInSecondsCalculator;