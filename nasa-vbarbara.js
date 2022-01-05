const getData = async () => {

  const dateStart = document.getElementById("datedepart")
  const dateFin = document.getElementById("datedefin")
  
  const url = "https://api.nasa.gov/neo/rest/v1/feed?start_date="+ dateStart "&end_date=" + datefin "&api_key=h1l0oYA0cbNuoknqZgeM6JrGnXe2MYnuBa0OFPCG"
  
  const response = await fetch(url);
  const data = await response.json();
  
  console.log(data);
  
  resultat.innerHTML = `
  `
  }
  getData()
  