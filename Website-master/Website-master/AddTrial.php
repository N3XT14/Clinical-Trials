<?php require_once 'header.php'?>
<!DOCTYPE>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/AddTrial.css">
	<script src="JS/AddTrial.js">
		function myfunction(){
			alert("If you dont provide insurance, your Medical Trial will be least Recommended.");
		}
	</script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
</head>
</head>
<body>
	<h1><center><u>New Trials Details</u></center></h1>
	<div class="try">
		<div id="trial_details">
			<table>
				<tr><th>Medicine Name</th><td><input required class="w3-input" type="textbox" id="medicine_name"></td></tr>
				<tr><th>Status</th><td><input required class="w3-input" type="textbox" id="status"></td></tr> 
				<tr><th>Purpose</th><td><input required class="w3-input" type="textbox" id="purpose"></td></tr>
				<tr><th>Age Group<br><label style="color: rgba(0,0,0,0.4);font-size: 12px">(0:Child,1:Adult,2:Old)</label></th><td><input type="text" id="age"class="w3-input"></td></tr>
				<tr><th>Allergies </th><td><input required class="w3-input" id="allergies"></td></tr>
				<tr><th>Not Recommended</th><td><input required class="w3-input" id="not_recomended"></td></tr>
				<tr><th>Number of Patients</th><td><input required class="w3-input" type="textbox" id="patient_no"></td></tr>
				<tr><th>Number of Trials</th><td><input required class="w3-input" type="textbox" id="trial_no"></td></tr>
				<tr><th>Success Rate</th><td><input required class="w3-input" type="textbox" id="success_rate"></td></tr>
			</table>
		</div>
		<div id="side_effects">
			<h1><center><u>Possible Side Effects</u></center></h1>
			<h4><center>(1:Yes & 0:No)</center></h4>
			<table>
				<tr><th>Headache</th><td><input required class="w3-input" type="input" id="headache" name="e1"></td></tr>
				<tr><th>Stomachache</th><td><input required class="w3-input" type="input" id="stomachache" name="e2"></td></tr>
				<tr><th>Nausea</th><td><input required class="w3-input" type="input" id="nausea" name="e3"></td></tr>
				<tr><th>Constipation</th><td><input required class="w3-input" type="input" id="constipation" name="e4"></td></tr>
				<tr><th>Insomnia</th><td><input required class="w3-input" type="input" id="insomnia" name="e5"></td></tr>
				<tr><th>Fever</th><td><input required class="w3-input" type="input" id="fever" name="e6"></td></tr>
				<tr><th>Diarrohea</th><td><input required class="w3-input" type="input" id="diarrohea" name="e7"></td></tr>
				<tr><th>Food Appetite</th><td><input required class="w3-input" type="input" id="food_appetite" name="e8"></td></tr>
				<tr><th>Anxiety</th><td><input required class="w3-input" type="input" id="anxiety" name="e9"></td></tr>
			</table>
		</div>
		<div id="phase_details" style="margin-top: 10px">
			<h1><center><u>Session 1 Details</u></center></h1>
			<table>
				<tr><th>Starting Trial Date:</th><td><input required class="w3-input" type="Date" id="starting_date" name="s1"></td></tr>
				<tr><th>Ending Trial Date:</th><td><input required class="w3-input" type="Date" id="ending_date"></td></tr>
				<tr><th>Status :</th><td><input required class="w3-input" type="textbor" id="status"></td></tr>
			</table>
		</div> 


		<div class="w3-center">
			<button style="margin-top: 10px;margin-bottom: 50px; " class=" w3-button w3-col s4 w3-bar-item w3-button w3-blue w3-round-xxlarge w3-display-center w3-hover-shadow w3-hover-blue w3-text-black" id="addtrial" onclick="Addtrial()" style="width:100px;">Submit</button>
		</div>
	</div>
</body>
</html>