
function Addtrial() {
	var age = document.getElementById("age");
	console.log(age);
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		if(!inputs[i].checkValidity())
		{
        		alert(inputs[i].validationMessage);
        		return;
		}
	}
	i=0;
	//inputs of trial section
	var trialinputs=document.getElementById('trial_details').getElementsByTagName('input');
	var trialtext=document.getElementById('trial_details').getElementsByTagName('textarea');
	//inputs of phase section

	var phaseinputs=document.getElementById('phase_details').getElementsByTagName('input');
	var trialdata={};
			while(i<trialinputs.length)
			{
				trialdata[trialinputs[i].id]=trialinputs[i].value;
				i++;
			}
			i=0;
			while(i<trialtext.length)
			{
				trialdata[trialtext[i].id]=trialtext[i].value;
				i++;
			}
	i=0;
	var phasedata={};
			while(i<phaseinputs.length)
			{
				phasedata[phaseinputs[i].id]=phaseinputs[i].value;
				i++;
			}		
console.log(trialdata);
console.log(phasedata);
	var user = firebase.auth().currentUser;
  	writeUserData(user,trialdata,phasedata);

}
function writeUserData(user,trialdata,phasedata) {
	var database = firebase.firestore();
	var i=0;
	var cityRef = database.collection("Lab").doc(user.uid).collection("Trial");
	cityRef.get().then(function(result){
		i=result.size;
		i=i+1;
		database.doc("Lab/"+user.uid+"/Trial/Trial_"+i).set(trialdata);
			console.log(phasedata);
			database.doc("Lab/"+user.uid+"/Trial/Trial_"+i+"/Phase/Phase_1").set(phasedata).then(function() {
				console.log("Document successfully written!")
				 window.location.href=("LabMain.php")});
		});

}
