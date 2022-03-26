function loginuser(){

  var userEmail = document.getElementById("username").value;
  var userPass = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    
    
    if(user != null){
      var email_id = user.email;
      console.log("Welcome User : " + email_id);
      console.log(user.uid);
    }

  } else {
    // No user is signed in.
    console.log(user);

  }
});
function logout(){
  firebase.auth().signOut();
}
