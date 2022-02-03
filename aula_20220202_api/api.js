const paisesContainer = document.querySelector('#paises')

const BASE_API = 'https://restcountries.com/v3.1'

async function getCountries() {

    const response = await fetch(`${BASE_API}/all`, {
        method: 'GET'
    })

    const listCountries = await response.json()

    listCountries.forEach((country) => {
        paisesContainer.insertAdjacentHTML(
            'beforeend',
            `
        <div class="card" style="width: 18rem;">
        <img src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p> <a href="${country.maps.googleMaps}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `)
    });

}

getCountries()

