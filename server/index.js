require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { getAll, getOne, update, create, delete_product} = require('./products_controller');

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database Connected');
})
.catch(error => {
    console.log(error);
})

// express.static(`${__dirname}/../../build`);

app.use(express.json());

app.get('/api/groducts', getAll);

app.get('/api/products/:id', getOne);

app.put('/api/products/:id', update);

app.post('/api/products', create);

app.delete('/api/products/:id', delete_product);

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}.`));