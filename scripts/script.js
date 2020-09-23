function burgerToggle() {
  var burgerDisplay = document.getElementById("navbarResponsive");
  var   iconToggle = document.getElementById("burgerIcon")
  if (burgerDisplay.className === "navbar") {
    burgerDisplay.className += " dropdown";
    iconToggle.className = "fas fa-times";
  }
  else {
    burgerDisplay.className = "navbar";
    iconToggle.className = "fas fa-bars";
  }
}
