const wordFrequencyCounter = (text) => text.split(" ").reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});
module.exports = wordFrequencyCounter;