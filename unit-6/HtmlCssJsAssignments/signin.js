document.querySelector("button").addEventListener("click", signIn, false);
var regdUsers = JSON.parse(localStorage.getItem("userLoginDetails"));
console.log("regdUsers:", regdUsers);
function signIn() {
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;

  if (email == "admin" && pass == "admin") {
    window.location.href = "home.html";
  } else {
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].email == email && regdUsers[i].password == pass) {
        window.location.href = "newpost.html";
      } else if (regdUsers[i].email != email || regdUsers[i].password != pass) {
        // console.log("ok")
        alert("Wrong Email and Password");
      }
    }
  }
}
