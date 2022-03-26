function myfunction(){	
	var Starting_Date = document.getElementById("Starting_Date").value;
	var Ending_Date = document.getElementById("Ending_Date").value;
	var Patients = document.getElementById("Patients").value;
	var user = firebase.auth().currentUser;


	var data1={
		Starting_Date:Starting_Date,
		Ending_Date:Ending_Date,
		Patients:Patients
	}
	


}