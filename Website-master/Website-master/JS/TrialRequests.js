function load(){
	setTimeout(myfunction, 2000);
}
function myfunction()
{
	var info=document.querySelector("#container");
	var user = firebase.auth().currentUser;
	var database = firebase.firestore();
	var i=0;

	var ref=database.collection("Lab/"+user.uid+"/Trial/Trial_1/Phase/Phase_1/Patient").where("Approval","==","Pending");
	ref.get()
	.then(patients =>{

		patients.forEach(patient =>{
			id=patient.id;
			var div = document.createElement("div"); 
				var btn=document.createElement("button");
				btn.setAttribute("onclick","approve('"+id+"')");
			div.setAttribute("data-id",id);
			div.setAttribute("id","div-"+id);
			div.setAttribute("style","float: left;");
			var header = document.createElement("h4");
	header.textContent=id;
	div.appendChild(header);
			ref=database.doc("Lab/"+user.uid+"/Trial/Trial_1/Phase/Phase_1/Patient/"+id);
			ref.get()
			.then(doc =>{
				console.log(doc);
				data=doc.data();
				console.log(data);
					id=data.id;
					console.log(data);
				console.log(data["Approval"]);
				})

			btn.textContent="Approve";
	div.appendChild(btn);
			info.appendChild(div);
			});
			$("#container").css("display","flex");
		$("#load").css("display","none");
		})
}
function approve(id){

console.log(id);
	var user = firebase.auth().currentUser;
	var database = firebase.firestore();
	database.doc("Lab/"+user.uid+"/Trial/Trial_1/Phase/Phase_1/Patient/"+id).update({
			Approval : "Approved"
		}).then(function(){
				console.log("done");
				document.getElementById("div-"+id).style.display="none";
				})
}