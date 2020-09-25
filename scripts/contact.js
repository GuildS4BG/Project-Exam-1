function submit() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;

  var regName = RegExp(/^(\S+)( \S+)*$/i);
  var regEmail = RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);


  //tried with alert, no luck
  if(regName.test(fistName) == false) {
    alert("Please fill out a valid name");
    return false
  }
  else document.getElementById("firstNameError").style.display = "none";

  //tried putting it inside the form as an onsubmit() function, no luck
  if(regName.test(lastName) == false) {
    document.getElementById("lastNameError").style.display = "block";
    return false
  }
  else document.getElementById("lastNameError").style.display = "none";

  //this was my first, but didnt get it to work on input submit, just a normal button
  if(regEmail.test(email) == false) document.getElementById("emailError").style.display = "block";
  else document.getElementById("emailError").style.display = "none";
}

//So ended up with just a normal required on the fields, so names/text arn't
//empty, and its a valid email.
