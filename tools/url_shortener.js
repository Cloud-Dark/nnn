const urlShortener = (url) => `short.ly/${Buffer.from(url).toString('base64').substring(0, 6)}`;
module.exports = urlShortener;