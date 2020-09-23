const url = "https://api.spacexdata.com/v4/launches/upcoming";
const nextMissionContainer = document.querySelector(".next-mission");
const resultsContainer = document.querySelector(".flex-wrap");
async function getMissions() {
  const response = await fetch(url);
  const results = await response.json();

  console.log(results);

  nextMissionContainer.innerHTML += `<div class="next-mission-info">
  <h2>${results[0].name}</h2>

  <p>${results[0].details}</p>

  <p>${results[0].crew}</p>

  <div class="buttons">
  <a href="${results[0].links.reddit.campaign}" target="_blank" class="button button2">Read More</a>

  <a href="${results[0].links.webcast}" target="_blank" class="button">Watch Live Now!</a>
  </div>
  </div>`;

  for (var i = 1; i < 9; i++) {
    const time = results[i].date_local;
    const date = new Date(time);
    resultsContainer.innerHTML += `<div class="future-missions col-s-5 col-m-3 col-1">
    <h3>${results[i].name}</h3>
    <p>${date}</p>
    </div>`;
  }
}
getMissions();
