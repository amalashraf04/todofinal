function login() {
    
    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "12345") {
      redirectToMainPage();
    } else {
        alert("Incorrect username or password");
        window.location='index.html';
    //   document.getElementById("error-message").innerHTML = "Incorrect username or password";
    }
  }

  function redirectToMainPage() {
    alert("Login Successfully");
    
   window.open("./todo.html","_blank");
    
  }
