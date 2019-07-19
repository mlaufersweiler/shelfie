require("dotenv").config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller')


const app = express();

const { SERVER_PORT, CONNECTION_STRING} = process.env;
app.use(express.json())

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
    })
    .catch(err => console.log(err))

app.get('/api/inventory', controller.getProducts)
app.get('/api/inventory/:id', controller.getProduct)
app.post('/api/product', controller.create)
app.put('/api/product/:id', controller.edit)
app.delete('/api/product/:id', controller.delete)

app.listen(SERVER_PORT, () => [
    console.log(`server listening on port ${SERVER_PORT}`)
])