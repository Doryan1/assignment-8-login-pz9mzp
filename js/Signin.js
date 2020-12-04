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

$("#Login").submit(function(e) {
  e.preventDefault();

  // get the username(email) and password from the form
  var email = "brendone@usca.edu";
  var password = "dsdsds";

  // sign in
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      console.log("Login in successfully");

      //optional
      let user = firebase.auth().currentUser;
      console.log(
        user.displayName + " " + user.email + " " + user.emailVerified
      );
    })
    .catch(error => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
