const express = require('express');
const app = express();
app.listen(4000);

app.get('/getError', (req, res, next) => {
    next(Error('hello i am error'));
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});