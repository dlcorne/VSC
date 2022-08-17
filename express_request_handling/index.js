const express = require('express');
const app = express();
app.listen(4494);
app.use(express.json()); 

app.use((req, res, next) => {
    const log1 = `host: ${req.hostname}
    ip: ${req.ip}
    time: ${new Date()}`;
    console.log(log1);
    next();
});

app.get('/', (req, res) => res.send('Hello, my name is !'));
let names = ['Dan', 'Faizaan', 'Mohamed', 'Khaleeq', 'Kiran'];

app.get('/getAll', (req, res) => res.send(names));

app.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} has been created`);
});

app.post('/replace/:index', (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} has been replaced by ${name}`);
});
