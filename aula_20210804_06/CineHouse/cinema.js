let catalogo = [
    {
        codigo: 1,
        titulo: "Lágrimas do Sol",
        duracao: 1.2,
        atores: ["Fernando", "João", "Bianca"],
        anoDeLancamento: 2017,
        emCartaz: true
    },
    {
        codigo: 2,
        titulo: "Homens de Preto",
        duracao: 1.4,
        atores: ["Will", "José", "Cristina"],
        anoDeLancamento: 2017,
        emCartaz: false
    }
]

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    catalogo.push({codigo: codigo, titulo: titulo, duracao: duracao, atores: atores, anoDeLancamento:anoDeLancamento, emCartaz:emCartaz})

}

let filme = ""
function buscarFilme(codigo){    
    for(var i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === codigo){
            filme = catalogo[i];
            return filme; 
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