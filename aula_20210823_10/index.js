const express = require('express')
const app = express()
const { v4: uuid_v4 } = require('uuid')

app.use(express.json())

const usuarios = []

app.get('/', (req, res) => {
    return res.send('Página inicial')
})

app.get('/usuarios', (req, res) => {
    return res.json(usuarios)
})

app.post('/usuarios', (req, res) => {
    
    const {nome, sobrenome} = req.body
    console.log(nome)
    console.log(sobrenome)

    const usu  = {id: uuid_v4(), nome, sobrenome}
    usuarios.push(usu)
    return res.json(usuarios)
})

app.put('/usuarios/:id', (req, res) => {
    const {id} = req.params
    const {nome, sobrenome} = req.body

    const usuarioIndex = usuarios.findIndex(usuario => usuario.id === id)

    if(usuarioIndex < 0){
        return res.status(400).json({
            error: 'Usuário não localizado!'
        })
    }
    console.log('Você atualizou o usuário: ', nome)

    const usuario = {
        id, nome, sobrenome
    }

    usuarios[usuarioIndex] = usuario

    return res.json(usuario)
})

app.delete('/usuarios/:id', (req, res) => {
    const {id} = req.params
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id === id)

    if(usuarioIndex < 0){
        return res.status(400).json({
            error: 'Usuário não localizado!'
        })
    }

    usuarios.splice(usuarioIndex, 1)

    return res.status(204).send()
})

app.listen(3000, () => {
    console.log('Servidor rodando!: http://localhost:3000')
})