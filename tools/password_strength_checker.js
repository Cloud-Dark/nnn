const passwordStrengthChecker = (password) => {
    const isStrong = password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
    return isStrong ? "Strong" : "Weak";
};
module.exports = passwordStrengthChecker;