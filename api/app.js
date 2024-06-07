const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const data = require('./dummy')
const app = express()
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.route('/api')
    .get((req, res) => {
        res.send(data)
    })
    .post((req, res) => {
        console.log(req.body);
        res.send(data)
    })

app.route('/api/:id')
    .get((req, res) => {
        res.send(data.find(animal => animal.id === req.params.id))
    })
    .put((req, res) => {
        console.log(req.body)
    })
    .delete((req, res) => {
        console.log(req.params.id)
    })

app.listen(port, () => {
    console.log('App running on port ' + port)
})