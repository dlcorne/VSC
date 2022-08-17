const router = require('express').Router();

let names = ['Dan', 'Faizaan', 'Mohamed', 'Khaleeq', 'Kiran'];

router.get('/', (req, res) => res.send('Hi, my name is (wha?), my name is (who?) my name is...!'));

router.get('/getAll', (req, res) => res.send(names));

router.delete('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

router.post('/create', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} has been created`);
});

router.post('/replace/:index', (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} has been replaced by ${name}`);
});


