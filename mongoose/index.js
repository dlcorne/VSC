const express = require ('express');
const app = express();

const server = app.listen(27017, () => {
    console.log(`Port: ${server.address().port} is on`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routes = require('./routes/movies');

const Movie = require('./db');

console.log(Movie);

app.use((req, res, next) => {
    const logEntry = `host: ${req.hostname}
        ip: ${req.ip}
        method: ${req.method}
        path: ${req.path}
        time: ${new Date()}`;
    console.log(logEntry);
    next();
});

app.use(routes);

module.exports = server;