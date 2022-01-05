const getData = async() => {

    const dateStart = document.getElementById("start")
    const dateFin = document.getElementById("end")
    const key = "h1l0oYA0cbNuoknqZgeM6JrGnXe2MYnuBa0OFPCG"

    const url = `https:api.nasa.gov/neo/rest/v1/feed?start_date=${dateStart}&end_date=${dateFin}&api_key=${key}`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    resultat.innerHTML = `
    `
}
getData()