const getIpAddress = (req) => req.ip || req.connection.remoteAddress;
module.exports = getIpAddress;