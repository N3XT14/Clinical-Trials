<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"></script>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
<style type="text/css">
	html,body{
		margin: 0px;
		height: 100%;
		background-size: cover;
		background-position: center;
	}
	#load{
		display: flex;align-items: center;justify-content: center;
		height: 500px;
	}
	.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: white;
		text-align: center;
	}
	#Logo
	{
		height: 100%;
		float: left;
	}
	a:hover{
		cursor: pointer;
	}
</style>
<script >
	function logout(){
  firebase.auth().signOut();
  localStorage.removeItem("name");
}
</script>
</head>
<body>
	<div class="w3-container w3-bar w3-card-4" style="height: 100px; background-color:#89c4f4;">
		<img id="Logo" src="images/Logo.png">
		<h1 class="w3-bar-item ">Medical Marvel</h1>
		<div style="margin-top: 50px; ">
			<a style="text-decoration: none;" class="w3-bar-item w3-right w3-right" href="">Services</a>
			<a style="text-decoration: none;" class="w3-bar-item w3-right w3-right" href="ContactUs.php">Contact</a>
			<a id="home"style="text-decoration: none; display: none" href="LabMain.php"><i class="fa fa-home w3-bar-item w3-right w3-right" ></i></a>
			<a id="logoutdisplay" style="text-decoration: none; display: none;" class="w3-bar-item w3-right w3-right" onclick="logout()" href="Login.php">Logout</a>

		</div>
	</div>
	<div class="footer">
		&copy2019 by Medical Marvel Developers
	</div>
	<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase.js"></script>
	<script>
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyDpDhtk-Bs9TzSVIuL5fyMKQZCEuAIrouA",
			authDomain: "medical-marvel.firebaseapp.com",
			databaseURL: "https://medical-marvel.firebaseio.com",
			projectId: "medical-marvel",
			storageBucket: "medical-marvel.appspot.com",
			messagingSenderId: "297007368505"
		};
		firebase.initializeApp(config);
	</script>
	<script type="text/javascript">
			var database = firebase.firestore();
			if(localStorage.getItem("name"))
				{

			$("#logoutdisplay").css('display','block');
			$("#home").css('display','block');	
				}
	var db=database.collection("Lab").get()
	.then((snapshot) =>{

	/*var user = firebase.auth().currentUser;
		if(user){
			$("#logoutdisplay").css('display','block');
			$("#home").css('display','block');
		}
		else(
			console.log("no user")
			);*/
		})
		/*var db1=db.collection("Trial");
		console.log(db1);	
	});
	*/
	
	</script>
</body>
</html>