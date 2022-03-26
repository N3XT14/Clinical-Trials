function load(){
	setTimeout(loadtrial, 2000);
}
function loadtrial(){

	var i=1;
	/*
	var phase=document.getElementById("phases");*/
	var info=document.querySelector("#trialbar");
	var user = firebase.auth().currentUser;
	var database = firebase.firestore();
	var datastored=database.collection("Lab/"+user.uid+"/Trial").where("status", "==", "Completed").get()
	.then(function(data){
		var div = document.createElement("div"); 
		data.forEach(data1 =>{
			i=data1.id;
			/*console.log(i);
			var a = document.createElement("a"); 
			var btn = document.createElement("BUTTON");  
			btn.setAttribute('data-id',i);
			btn.setAttribute('data-style',"float:left");
			btn.setAttribute('onclick',"displayinfo('"+i+"')");
			var t = document.createTextNode(i);  
			btn.appendChild(t);
			a.appendChild(btn);                                // Append the text to <button>
			div.appendChild(a);*/
			var optn= document.createElement("option");
			optn.setAttribute("data-id",i);
			optn.setAttribute("value",i); 
			optn.textContent=i;
			info.appendChild(optn);
		});
		$("#trialnav").css("display","block");
		$("#load").css("display","none");
	});
}
function displayinfo()
{
	var id=document.getElementById("trialbar").value;
	console.log(id);
	var exist=$("#div-"+id);
	if(exist.length!=0){
		return;
	}
	var info=document.querySelector("#trialinfo");
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
		data=snapshot.data();;
		console.log(data);
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
	});
}