function load(){
	setTimeout(loadtrial, 1000);
	setTimeout(loadtrial1,1000);
	setTimeout(loadtrial3,1000);
}
/*Doctor*/

var i=1;
function loadtrial(){
window.user = firebase.auth().currentUser;
window.database = firebase.firestore();
	var info=document.querySelector("#trialbar");
	var datastored=database.collection("Doctor").where("Status", "==", "Pending").get()
	.then(function(data){
		var div = document.createElement("div"); 
		data.forEach(data1 =>{
			i=data1.id;
			var but=data1.data().Name;
			var optn= document.createElement("option");
			optn.setAttribute("data-id",i);
			optn.setAttribute("value",i); 
			optn.textContent=but;
			info.appendChild(optn);
		});
		
		
	});
}
function displayinfo()
{
	var id=document.getElementById("trialbar").value;
	$("#trialinfo").html('');
	//document.getElementById("try").style.display="block";
	var exist=$("#div-"+id);
	if(exist.length!=0){
		return;
	}
	var info=document.querySelector("#trialinfo");
	var header = document.createElement("h4"); 
	var div = document.createElement("div"); 
	var t=1;
	var datastored=database.doc("Doctor/"+id).get()
	.then((snapshot) => {
		data=snapshot.data();
		console.log(data.id);
		var div = document.createElement("div");
		div.setAttribute("data-id",id);
		div.setAttribute("id","div-"+id);
		var but=data.Name;
		var x=document.getElementById("id");
		header.textContent=but;
		console.log(t);
		div.appendChild(header);
		
		var ul = document.createElement("ul");
		for(name in data){		
			var li = document.createElement("li"); 
			var p1 = document.createElement("label"); 
			var p2 = document.createElement("label");
			p1.setAttribute("data-style","float:left");
			p2.setAttribute("data-style","float:left"); 
			li.setAttribute("data-id",data[name]);
			p1.textContent=name+"  :";
			p2.textContent=data[name];
			li.appendChild(p1);
			li.appendChild(p2);
			ul.appendChild(li);
		}
		div.appendChild(ul);
		console.log(data.id);
		
		var approve = document.createElement("BUTTON");
		approve.setAttribute('onclick',"approvedoctor('"+id+"')");
		approve.textContent="Approve";
		approve.setAttribute("class","w3-button w3-green w3-round  w3-hover-shadow w3-hover-blue w3-text-black ");
		div.appendChild(approve);
		
		var reject = document.createElement("BUTTON");
		reject.setAttribute('onclick',"rejectdoctor('"+id+"')");
		reject.textContent="Reject";
		reject.setAttribute("class","w3-margin-left w3-button w3-red w3-round  w3-hover-shadow w3-hover-blue w3-text-black ");
		div.appendChild(reject);
		info.appendChild(div);

		})

}



function approvedoctor(j)
{
	//var user=document.getElementById("chase").value;
	
	database.collection("Doctor/").doc(j).update({
	Status: "Approved"
	}).then(function() {
	console.log("Document successfully updated!");
	});
}
function rejectdoctor(j)
{
	//var user=document.getElementById("chase").value;
	
	database.collection("Doctor/").doc(j).update({
	Status: "Rejected"
	}).then(function() {
	console.log("Document successfully updated!");
	});
}


/*Lab*/
function loadtrial1(){

	var i=1;
	/*
	var phase=document.getElementById("phases");*/
	var info=document.querySelector("#trialbar1");
	var datastored=database.collection("Lab").where("Status", "==", "Pending").get()
	.then(function(data){
		var div = document.createElement("div"); 
		data.forEach(data1 =>{
			i=data1.id;
			console.log(i);
			var but=data1.data().Name;
			console.log(but);
			var optn= document.createElement("option");
			optn.setAttribute("data-id",i);
			optn.setAttribute("value",i); 
			optn.textContent=but;
			info.appendChild(optn);
		});
	});
}
function displayinfo1()
{
	var id=document.getElementById("trialbar1").value;
	$("#trialinfo1").html('');
	var exist=$("#div-"+id);
	if(exist.length!=0){
		return;
	}//
	var info=document.querySelector("#trialinfo1");
	var header = document.createElement("h4"); 
	var div = document.createElement("div");
	div.setAttribute("data-id",id);
	div.setAttribute("id","div-"+id);
	var datastored=database.doc("Lab/"+(id)).get()
	.then((snapshot) => {
		data=snapshot.data();
		var but=data.Name;
			//var dname=but.Name;
		header.textContent=but;
		div.appendChild(header);
		//creating html 
		var ul = document.createElement("ul");
		for(name in data){		
			var li = document.createElement("li"); 
			var p1 = document.createElement("label"); 
			var p2 = document.createElement("label");
			p1.setAttribute("data-style","float:left");
			p2.setAttribute("data-style","float:left"); 
			li.setAttribute("data-id",data[name]);
			p1.textContent=name+"  :";
			p2.textContent=data[name];
			li.appendChild(p1);
			li.appendChild(p2);
			ul.appendChild(li);
		}

		div.appendChild(ul);
		var approve = document.createElement("BUTTON");
		approve.setAttribute('onclick',"approvelab('"+id+"')");
		approve.textContent="Approve";
		approve.setAttribute("class","w3-button w3-green w3-round  w3-hover-shadow w3-hover-blue w3-text-black ");
		div.appendChild(approve);
		
		var reject = document.createElement("BUTTON");
		reject.setAttribute('onclick',"rejectlab('"+id+"')");
		reject.textContent="Reject";
		reject.setAttribute("class","w3-margin-left w3-button w3-red w3-round  w3-hover-shadow w3-hover-blue w3-text-black ");
		div.appendChild(reject);
		info.appendChild(div);
	});
}
function approvelab(id){
	database.collection("Lab/").doc(id).update({
		Status: "Approved"
		}).then(function() {
		console.log("Document successfully updated!");
		});
}

function rejectlab(id){
	database.collection("Lab/").doc(id).update({
		Status: "Rejected"
		}).then(function() {
		console.log("Document successfully updated!");
		});
}

/*Trial*/

function loadtrial3(){

	var i=1;
	/*
	var phase=document.getElementById("phases");*/
	var info=document.querySelector("#trialbar3");
	var datastored=database.collection("Lab/"+user.uid+"/Trial").where("status", "==", "Pending").get()
	.then(function(data){
		var div = document.createElement("div"); 
		data.forEach(data1 =>{
			i=data1.id;
			var optn= document.createElement("option");
			optn.setAttribute("data-id",i);
			optn.setAttribute("value",i); 
			optn.textContent=i;
			info.appendChild(optn);
		});
	});
}
function displayinfo3()
{
	var id=document.getElementById("trialbar3").value;
	var exist=$("#div-"+id);
	if(exist.length!=0){
		return;
	}
	var info=document.querySelector("#trialinfo3");
	var header = document.createElement("h4"); 
	var div = document.createElement("div");
	div.setAttribute("data-id",id);
	div.setAttribute("id","div-"+id);
	header.textContent=id;
	div.appendChild(header);
	var datastored=database.doc("Lab/"+user.uid+"/Trial/"+(id)).get()
	.then((snapshot) => {
		data=snapshot.data();
		//creating html 
		var ul = document.createElement("ul");
		for(name in data){		
			var li = document.createElement("li"); 
			var p1 = document.createElement("label"); 
			var p2 = document.createElement("label");
			p1.setAttribute("data-style","float:left");
			p2.setAttribute("data-style","float:left"); 
			li.setAttribute("data-id",data[name]);
			p1.textContent=name+"  :";
			p2.textContent=data[name];
			li.appendChild(p1);
			li.appendChild(p2);
			ul.appendChild(li);
		}
		div.appendChild(ul);
		var approve = document.createElement("BUTTON");
		approve.setAttribute('onclick',"approvetrial('"+id+"')");
		approve.textContent="Approve";
		approve.setAttribute("class","w3-button w3-green w3-round  w3-hover-shadow w3-hover-blue w3-text-black ");
		
		var reject = document.createElement("BUTTON");
		reject.setAttribute('onclick',"rejecttrial('"+id+"')");
		reject.textContent="Reject";
		reject.setAttribute("class","w3-margin-left w3-button w3-red w3-round  w3-hover-shadow w3-hover-blue w3-text-black ");
		
		div.appendChild(approve);
		div.appendChild(reject);
		info.appendChild(div);
	});
}
function approvetrial(id){
	database.doc("Lab/"+user.uid+"/Trial/"+id).update({
		status: "Approved"
		}).then(function() {
		console.log("Document successfully updated!");
		});
}

function approvetrial(id){
	database.doc("Lab/"+user.uid+"/Trial/"+id).update({
		status: "Rejected"
		}).then(function() {
		console.log("Document successfully updated!");
		});
}