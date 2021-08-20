const express = require('express')
const path = require('path')

const app = express()

let produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null
}

//Rotas
app.get('/', (req, res) => res.send('Olá, mundo!'))
app.get('/contatos',(req, res) => res.send('Página de contatos!'))

app.get('/produto/adicionar', (req, res) => res.send(produto))

app.post('/produto/criar', (req, res) => res.send(produto))

app.listen(3000, ()=>{console.log('Servidor ativo!')})
