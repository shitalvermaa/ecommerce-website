// Get the form element
var form = document.getElementById("login-form");

// Add an event listener to the form submit event
form.addEventListener("login", function(event) {
  // Get the input elements
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var cpassword = document.getElementById("cpassword");

  // Check if the input elements are valid
  if (username.value.trim() === "") {
    alert("Please enter your username");
    event.preventDefault();
  } else if (email.value.trim() === "") {
    alert("Please enter your email");
    event.preventDefault();
  }else if (password.value.trim() === "") {
    alert("Please enter your password");
    event.preventDefault();
  }else if (cpassword.value.trim() === "") {
    alert("Please confirm your password");
    event.preventDefault();
  }
});