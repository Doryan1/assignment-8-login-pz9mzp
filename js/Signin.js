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
