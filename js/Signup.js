var firebaseConfig = {
  apiKey: "AIzaSyAbeo7pSZtNGo5OsZdusZVxAw6viHU1eXo",
  authDomain: "assignment7-15e08.firebaseapp.com",
  databaseURL: "https://assignment7-15e08.firebaseio.com",
  projectId: "assignment7-15e08",
  storageBucket: "assignment7-15e08.appspot.com",
  messagingSenderId: "982981695217",
  appId: "1:982981695217:web:cd6c8d5e2d301dcf61bb50",
  measurementId: "G-G0K4SN028Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = "doryanz@usca.edu";
  var password = "tacoman";

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
