function ValidateEmail() {
  event.preventDefault();
  var input = document.getElementById("input");
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    document.getElementById("result").innerHTML = "Valid email address!";
  } else {
    document.getElementById("result").innerHTML = "Invalid email address!";
  }
}
