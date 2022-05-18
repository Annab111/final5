var createAccountForm = document.querySelector("#createAccount")
var loginForm= document.querySelector("#login")

createAccountForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log(createAccountForm.emailaddress.value, createAccountForm.password.value)
    
    var email = createAccountForm.emailaddress.value;
    var password = createAccountForm.password.value;
    
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        //var user = userCredential.user;
        // ...
        console.log("user created")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    
    })

    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      console.log(loginForm.emailaddress.value, loginForm.password.value)
      
      var email = loginForm.emailaddress.value;
      var password = loginForm.password.value;
      
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
         // Signed in
        var user = userCredential.user;
        // ...
       })
       .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
      });
      
      })

    