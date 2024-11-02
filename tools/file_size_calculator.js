const fileSizeCalculator = (sizeInBytes) => (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
module.exports = fileSizeCalculator;