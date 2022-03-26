function loginuser(){

 var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
    if(!inputs[i].checkValidity())
      {
        var id=inputs[i].id;
        alert(id+" :"+inputs[i].validationMessage);
        return;

        //alert(inputs[i].validationMessage);
      }
}
  var userEmail = document.getElementById("username").value;
  var userPass = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then(function(user){
       var user = firebase.auth().currentUser;
       console.log(user.displayName);
       var data=user.displayName;
       window.location.href= data+'Main.php';
       localStorage.setItem("name", data);
    })
    .catch(function(error) {
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
    


    if(user != null){
      var email_id = user.email;
    }
  } else {
    // No user is signed in.
    console.log("no user signed in");
  }
});

