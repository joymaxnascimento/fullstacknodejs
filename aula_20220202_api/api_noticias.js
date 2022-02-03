const noticiasContainer = document.querySelector('#listaDeNoticias')

const BASE_API = 'https://newsapi.org/v2'
const API_KEY = 'ac341551a7674ebd86155c79e575cb21'

async function getNoticias() {

    const response = await fetch(`${BASE_API}/top-headlines?country=br`, {
        headers: {
            'X-Api-Key': API_KEY
        },
        method: 'GET'
    })

    const listaContainer = await response.json()

    console.log(listaContainer.articles)

    listaContainer.articles.forEach((noticia) => {
        noticiasContainer.insertAdjacentHTML(
            'beforeend',
            `
            <div class="col-3">
            <div class="card">
              <img src="${noticia.urlToImage}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${noticia.title}</h5>
                <p class="card-text">
                  ${noticia.content}
                </p>
                <a href="${noticia.url}" class="btn btn-primary">Link</a>
              </div>
            </div>
          </div>
        `)
    });

}

getNoticias()

