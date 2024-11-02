// server.js
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./route');

// Use routes
app.use('/', routes);

// Start the server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
