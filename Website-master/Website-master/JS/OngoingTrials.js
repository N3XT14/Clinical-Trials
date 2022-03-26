function load(){
	setTimeout(loadtrial, 2000);
}
function loadtrial(){

	var i=1;
	var info=document.querySelector("#container");
	var user = firebase.auth().currentUser;
	var database = firebase.firestore();
	var datastored=database.collection("Lab/"+user.uid+"/Trial").where("status", "==", "Ongoing").get()
	.then(function(data){
		var div = document.createElement("div"); 
		console.log(data);
		data.forEach(data1 =>{
			i=data1.id;
			console.log(data1);
			var a = document.createElement("a"); 
			var btn = document.createElement("BUTTON");  
			btn.setAttribute('data-id',i);
			btn.setAttribute('data-style',"float:left");
			btn.setAttribute('onclick',"displayinfo('"+i+"')");
			var t = document.createTextNode(i);  
			btn.appendChild(t);
			a.appendChild(btn);                                // Append the text to <button>
			div.appendChild(a);
			i++;
			
		});
		info.appendChild(div);
		
		$("#content").css("display","block");
		$("#load").css("display","none");
		$("#addphase").css("display","none");
	});
}
function displayinfo(id)
{

	var exist=$("#div-"+id);
	$("#phases").html('');
	if(exist.length!=0){
		return;
	}

	var info=document.querySelector("#phases");
	var header = document.createElement("h4"); 
	var div = document.createElement("div");
	div.setAttribute("data-id",id);
	div.setAttribute("id","div-"+id);
	var user = firebase.auth().currentUser;
	var database = firebase.firestore();
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
		info.appendChild(div);
		var datastored=database.collection("Lab/"+user.uid+"/Trial/"+(id)+"/Phase").get()
		.then(phase =>{
			var size=phase.size;
			size=size+1;
			var phasesize=phase.size;
			console.log(size);
			phase.forEach((snapshot) => {
				console.log(snapshot);
				data=snapshot.data();
				phaseid=snapshot.id;
				var info=document.querySelector("#phases");
				var header = document.createElement("h4"); 
				var div = document.createElement("div");
				var btn=document.createElement("button");
				var a=document.createElement("a");
				a.setAttribute("href","ViewFeedback.php?t="+id+"+p="+phaseid);
				btn.textContent="View Feedback";
				btn.setAttribute("data-id",phaseid);
				div.setAttribute("data-id",phaseid);
				div.setAttribute("id","div-"+phaseid);
				header.textContent=phaseid;
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
		a.appendChild(btn);
		div.appendChild(a);
		console.log( size);
		console.log( size);
		var modal=document.getElementById("modalbutton").setAttribute("onclick","addphase('"+size+"','"+id+"')");

		info.appendChild(div);

	});
			$("#addphase").css("display","block");
			
		});
	});
}
function addphase(phaseid,id)
{

	var i=0;
	if(phaseid>=4){
		alert("4 trials are already completed");
		window.location.href=("OngoingTrials.php");
	}
	var user = firebase.auth().currentUser;
	var database = firebase.firestore();
	var modal=document.getElementById("id01").getElementsByTagName('input');
	var modaldata={};
	while(i<modal.length)
	{
		modaldata[modal[i].id]=modal[i].value;
		i++;
	}
	database.doc("Lab/"+user.uid+"/Trial/"+id+"/Phase/Phase_"+phaseid).set(modaldata).then(function() {
		console.log("Document successfully written!");
		phaseid-=1;
		database.doc("Lab/"+user.uid+"/Trial/"+id+"/Phase/Phase_"+phaseid).update({
			Status : "completed"
		}).then(function(){
					window.location.href=("OngoingTrials.php");
				})

	});
}