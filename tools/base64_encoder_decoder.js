const base64Encoder = (text) => Buffer.from(text).toString('base64');
const base64Decoder = (encoded) => Buffer.from(encoded, 'base64').toString();
module.exports = { base64Encoder, base64Decoder };