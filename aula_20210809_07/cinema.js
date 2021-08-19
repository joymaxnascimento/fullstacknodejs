let catalogo = require('./database/catalogo.json')

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    catalogo.push({codigo: codigo, titulo: titulo, duracao: duracao, atores: atores, anoDeLancamento:anoDeLancamento, emCartaz:emCartaz})

}

function buscarFilme(codigo){    
    for(var i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === codigo){
            return catalogo[i];
        }
    }
}

function alterarStatusEmCartaz(codigo){
    for(var i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === codigo){
            if(catalogo[i].emCartaz === false){
                catalogo[i].emCartaz = true
            }else{
                catalogo[i].emCartaz = false
            } 
        } 
    }
}

adicionarFilme(3, "Filme3", 2, ["José", "João"], 2015, false)
console.log(catalogo)
console.log('------------------')
console.log(buscarFilme(2))
console.log('------------------')
alterarStatusEmCartaz(2)
console.log(catalogo[1])