const url = "https://api.spacexdata.com/v4/launches/upcoming";
const nextMissionContainer = document.querySelector(".next-mission");
const resultsContainer = document.querySelector(".flex-wrap");
async function getMissions() {
  const response = await fetch(url);
  const results = await response.json();
  var liveVideo = results[0].links.webcast;
  if (liveVideo === null) {
    liveVideo = "https://www.youtube.com/spacex";
  }
  else {
    liveVideo = results[0].links.webcast;
  }
  console.log(results);

  nextMissionContainer.innerHTML += `<div class="next-mission-info">
  <h2>${results[0].name}</h2>

  <p>${results[0].details}</p>

  <p>${results[0].crew}</p>

  <div class="buttons">
  <a href="${results[0].links.reddit.campaign}" class="button button2" target="_blank" title="Read More">Read More</a>

  <a href="${liveVideo}" class="button" target="_blank" title="Watch live">Watch Live Now!</a>
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
