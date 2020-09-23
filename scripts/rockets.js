const url = "https://api.spacexdata.com/v4/rockets";
const resultsContainer = document.querySelector(".flex-wrap");
async function getRockets() {
  const response = await fetch(url);
  const results = await response.json();

  console.log(results);

  for (var i = 0; i < results.length; i++) {
    resultsContainer.innerHTML += `<div class="rockets">
    <a href="${results[i].wikipedia}">
    <h2>${results[i].name}</h2>
    </a>
    <a href="${results[i].flickr_images[0]}">
    <img src=${results[i].flickr_images[0]} alt="" class="col-6">
    </a>
    <p>Cost per launch: ${results[i].cost_per_launch} $</p>
    <p>${results[i].description} </p>
    <h3>Techs:</h3>
    <p>Height: ${results[i].height.meters} meters (${results[i].height.feet} feet)</p>
    <p>Diameter: ${results[i].diameter.meters} meters / ${results[i].diameter.feet} feet</p>
    <p>Mass: ${results[i].mass.kg} kg</p>
    <a href="${results[i].wikipedia}" target="_blank" class="rocket-button button">Read More</a>
    </div>`;
  }
}
getRockets();
