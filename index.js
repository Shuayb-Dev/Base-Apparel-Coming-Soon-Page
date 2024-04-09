function ValidateEmail() {
  event.preventDefault(); //Prevents Email Validation Message From Disappearing Straightaway

  let input = document.getElementById("input");
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    document.getElementById("result").innerHTML = "Valid email address!";
  } else {
    document.getElementById("result").innerHTML = "Invalid email address!";
  }
}
