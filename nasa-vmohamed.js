const getData = async() => {
    const body = Document
    const dateStart = document.getElementById("start")
    const dateFin = document.getElementById("end")
    const key = "h1l0oYA0cbNuoknqZgeM6JrGnXe2MYnuBa0OFPCG"

    const url = `https:api.nasa.gov/neo/rest/v1/feed?start_date=${dateStart}&end_date=${dateFin}&api_key=${key}`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const mapsElem = document.createElement("a");
    mapsElem.className = "mapsButton";
    mapsElem.innerText = "Google Maps"
    mapsElem.href = infos.maps.googleMaps;


    resultats.innerHTML = `
  <h3>${pays}</h3>
  <p><strong>Capital:</strong> ${infos.capital[0]}</p>
  <p><strong>Continent:</strong> ${infos.continents[0]}</p>
  <p><strong>Superficie:</strong> ${infos.area}</p>
  <p><strong>Vents:</strong> ${meteo.wind.speed} km/h</p>
`
    console.log(meteo.weather)
    resultats.appendChild(mapsElem)
}