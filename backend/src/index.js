//library/microframework  express assists in implementing the routes
const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://<login>:<senha>@cluster0.0mymt.mongodb.net/wek10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true ,

});

app.use(express.json());
app.use(routes);

app.listen(3333);

//Rest: métodos http: Get, Post, put, delete
//Tipos de parâmetros: 
//Query (post)=> request.query [filtros, ordenação, paginação ...]
//Route (delete) => request.params(identificar um recuros ID para alteração ou remoção)
//Body (post e put)=> request.body (dados para criação ou alteração de um registro)



