const url = "https://api.spacexdata.com/v4/launches/next";
async function getNextLaunch() {
  const response = await fetch(url);
  const results = await response.json();

  console.log(results);

  var liveVideo = results.links.webcast;
  var buttonText;
  if (liveVideo === null) {
    liveVideo = "https://www.youtube.com/spacex";
    buttonText = "Watch here!"
  }
  else {
    liveVideo = results.links.webcast;
    buttonText = "Watch Live Now!"
  }
  document.getElementById("live-button").href = liveVideo;
  document.getElementById("live-button").innerHTML = buttonText;
  var launchTime = (results.date_unix * 1000);

  var currentTime = Date.now();
  var timeToLaunch = (launchTime - currentTime);

  var days, hours, minutes, seconds;

  seconds = Math.floor(timeToLaunch / 1000);
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  days = Math.floor(hours / 24);
  hours = hours % 24;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var x = setInterval(function() {
    currentTime = Date.now();
    timeToLaunch = (launchTime - currentTime);

    seconds = Math.floor(timeToLaunch / 1000);
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    days = Math.floor(hours / 24);
    hours = hours % 24;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
      document.getElementById("days").innerHTML = "0";
      document.getElementById("hours").innerHTML = "0";
      document.getElementById("minutes").innerHTML = "0";
      document.getElementById("seconds").innerHTML = "0";
    }
  }, 1000);
}
getNextLaunch();
