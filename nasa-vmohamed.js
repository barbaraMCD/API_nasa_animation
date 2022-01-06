const button = document.getElementById("button")
    // const button1 = document.getElementById("button01")




button.addEventListener("click", async() => {

    // const body = document.getElementsByTagName("body")[0]
    // const dateStart = document.getElementById("start")
    // const dateFin = document.getElementById("end")
    // const key = "h1l0oYA0cbNuoknqZgeM6JrGnXe2MYnuBa0OFPCG"
    //     // GET https: //images-api.nasa.gov
    //     // GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
    //     // const url = `https:api.nasa.gov/neo/rest/v1/feed?start_date=${dateStart}&end_date=${dateFin}&api_key=${key}`

    // const url = `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY`

    const inputmoviID = document.getElementById("movie")
    const inputtvID = document.getElementById("tv")
        // const id = 
    const token = "30797fbce0ac2b192c3301931270ef6d"
    const urlmovie = `https://api.themoviedb.org/3/movie/${inputmoviID.value}?api_key=${token}`
    const urltv = `https://api.themoviedb.org/3/tv/${inputtvID.value}?api_key=${token}`

    const body = document.getElementsByTagName("body")[0]
        // const button = document.getElementById("button01")
        // const image = document.getElementById("image")

    const response = await fetch(urlmovie);

    const data = await response.json();

    console.log(data)
    const responsetv = await fetch(urltv);

    const datatv = await responsetv.json();

    console.log(datatv)

    const resultats = document.getElementById("resultat");
    resultats.style.display = "block"
    const resultatstv = document.getElementById("resultattv");
    resultatstv.style.display = "block"
    resultats.innerHTML = `
    <p><strong>id:</strong> ${data.id}</p>
      <p><strong>title:</strong> ${data.title}</p>
       <p><strong>originale title:</strong> ${data.original_title}</p>
       <p><strong>date de sortie:</strong> ${data.release_date}</p>
      <p><strong>histoire:</strong> ${data.overview} </p>
      <p><strong>original_language:</strong> ${data.original_language} </p>
      <a href="${data.homepage}" > homepage </a >
      <p><strong>duree de film:</strong> ${data. runtime} min</p>
      <p><strong>note  de film:</strong> ${data.vote_average} </p>
      <p><strong>nombre de vote  de film:</strong> ${data.vote_count} </p>
      <p><strong>status  de film:</strong> ${data.status} </p>
      <p><strong>popularity de film:</strong> ${data.popularity} </p>
      <p><strong>tagline de film:</strong> ${data.tagline} </p>
      <img url="${data.poster_path.jpg}>
      budget
      revenue

     `
    resultatstv.innerHTML = `
     <p><strong>id:</strong> ${datatv.id}</p>
       <p><strong>nom :</strong> ${datatv.name}</p>
        <p><strong>nom originale :</strong> ${datatv.original_name}</p>
        <p><strong>1ere fois(date) de sortie:</strong> ${datatv.first_air_date}</p>
        <p><strong>derniere fois(date) de sortie:</strong> ${datatv.last_air_date}</p>
        <p><strong>nombre de sessions:</strong> ${datatv.number_of_seasons}</p>
        <p><strong>nombre de episodes:</strong> ${datatv.  number_of_episodes}</p>
        <p><strong>prochaine episodes a voir:</strong> ${datatv.next_episode_to_air}</p>
        <p><strong>en production :</strong> ${datatv. in_production}</p>
       <p><strong>histoire de serie:</strong> ${datatv.overview} </p>
       <p><strong>original_language:</strong> ${datatv.original_language} </p>
       <a href="${datatv.homepage}" > homepage </a >
       <p><strong>note  de serie:</strong> ${datatv.vote_average} </p>
       <p><strong>nombre de vote de serie:</strong> ${datatv.vote_count} </p>
       <p><strong>status  de serie:</strong> ${datatv.status} </p>
       <p><strong>popularity  de serie:</strong> ${datatv.popularity} </p>
       <p><strong>  tagline  de serie:</strong> ${datatv.tagline} </p>
       <p><strong> type  de serie:</strong> ${datatv.type} </p>
      
       
       
 
       <img url="${datatv.poster_path.jpg}>
 
      `









    // const response = await fetch(url, );
    // const data = await response.json();

    // console.log(data);


    // mapsElem.className = "object";




    // resultats.innerHTML = `

    //   <p><strong>Capital:</strong> ${}</p>
    //   <p><strong>Continent:</strong> ${}</p>
    //   <p><strong>Superficie:</strong> ${}</p>
    //   <p><strong>Vents:</strong> ${} km/h</p>
    // `


})