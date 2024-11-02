const getDeviceOrientation = (width, height) => (width > height ? "Landscape" : "Portrait");
module.exports = getDeviceOrientation;