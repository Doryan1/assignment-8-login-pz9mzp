var firebaseConfig = {
  apiKey: "AIzaSyDt4JhLkehdlBlRNYTBTXlbaW2xO-FlJAI",
  authDomain: "assignment8-3b1cc.firebaseapp.com",
  projectId: "assignment8-3b1cc",
  storageBucket: "assignment8-3b1cc.appspot.com",
  messagingSenderId: "11224839624",
  appId: "1:11224839624:web:22876c74e0050203c43cfd",
  measurementId: "G-42SYXXCD2Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  //change the following code
  var email = document.getElementById("userIn");
  console.log("email");
  var password = document.getElementById("passIn");
  console.log("password");

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(success => {
      // Signed in

      console.log("You are signed up");
      let user = firebase.auth().currentUser;

      user.updateProfile({ displayName: "Brendon Esposito" });
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
      console.log("error");
    });
});
