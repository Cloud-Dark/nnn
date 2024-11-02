const weatherDateWidget = () => {
    return {
        date: new Date().toLocaleDateString(),
        weather: "Sunny, 25°C" // Mock weather data
    };
};
module.exports = weatherDateWidget;