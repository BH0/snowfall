<html> 
	<head> 
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	</head> 
	<body> 
	
	<!-- 
	To Do: 
	* turn code from (first answer of): 
		https://stackoverflow.com/questions/30285124/can-i-use-ajax-post-to-post-data-to-a-json-file-on-my-server 
		into plain JS (not JQuery) 
	* Produce prototype / example - done
	* Convert (JQuery) prototype into vanilla JS - postponed 
	* Insert code into Wordpress plugin 
		* JS - PHP side: Object Literal gets values that were inputted into form fields by user > 
		sends these values to JSON file as JSON > 
		Normal JS Side: Gets values from JSON file 		
	* Test code 
	--> 

	<form> 
		
		<input type="text" id="fallSpeed" name="fallSpeed"> 
		<input type="text" id="width" name="width"> 
		<input type="text" id="rate" name="rate"> 
		<button type="submit" id="submit-btn">Press</button> 
		
		<!-- 
		<input type="text" id="name" name="name"> 
		<button type="submit" id="submit-btn"> Press </button>
		--> 
	</form> 

	<script> 
	
	$('#submit-btn').on('click', function(e) { 
		e.preventDefault(); 
		if ($('#fallSpeed').val()) { 
			$.ajax({ 
				url: 'savejson.php',  
				method: 'post', 
				data: {
						'fallSpeed': $('#fallSpeed').val(), 
						'width': $('#width').val(), 
						'rate': $('#rate').val()
				}, 
				success: function(response) { 
					console.log("Success"); 
				} 
			}); 
		} 
	}); 
	
	/* 
	$('#submit-btn').on('click', function(e) {
		e.preventDefault();
		if( $('#name').val() ){
			$.ajax({
				url     : 'savejson.php',
				method  : 'post',
				data    : { 'name': $('#name').val() },
				success : function( response ) {
					alert( response );
				}
			});
			console.log("Request sent"); 
		} 
	});
	*/ 
	
	/* 
	var button = document.getElementById("submit-btn"); 
	button.addEventListener("click", function(e) { 
		e.preventDefault(); 
		postData(); 
	}); 
	
	function postData() { 
		var data = document.getElementById('name').value; 
		var xhr = new XMLHttpRequest(); 
		xhr.onreadystatechange = function() { 
			if (this.readyState == 4 && this.status == 200) { 
				console.log(data); 
				console.log("response: " + this.responseText); 
			} 
		} 
		xhr.open("POST", "savejson.php", true); 
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
		
		var theData = document.getElementById("name").value; 
		//xhr.send(); 
		xhr.send(theData); 
		//xhr.send('name': theData); 
	} 
	*/ 
	
		
		/* 
	var button = document.getElementById("submit-btn"); 
	button.addEventListener("click", function(e) { 
		e.preventDefault(); 
		loadDoc(); 
	}); 
	function loadDoc() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				document.getElementById("name").innerHTML = this.responseText; 
			}
		};
		xhr.open("POST", "options.json", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		var theData = document.getElementById("name").value; 
		xhr.send(); 
	} 
	
	/* 
	var xhr = new XMLHttpRequest();
	var button = document.getElementById("name"); 
	button.addEventListener("click", function(e) { 
		e.preventDefault(); 
		postData(); 
	}); 

	function postData() { 
		//var xhr = new XMLHttpRequest(); 
		xhr.open("POST", "options.json", true); 

		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 

		xhr.onreadystatechange = function() { 
			if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){ 
				// request finished 
			} 
		} 
	}  

	xhr.send(); 
 
	console.log("script running"); 
	
	*/ 
	
	</script> 
	<?php 
	/* 
	if (isset($_POST['name'])) { 
		$fp = fopen('options.json', 'w');
		fwrite($fp, json_encode($_POST['name']));
		fclose($fp); 
	} else { 
		echo "<dib> 'name' is not set </div> "; 
	} 
	*/ 
	?> 

	</body> 
</html> 

<!-- 

	<form> 
		<input type="text" id="name" name="name"> 
		<button type="submit" id="submit-btn"> Press </button> 

	<script> 
	
	var button = document.getElementById("submit-btn"); 
	button.addEventListener("click", function(e) { 
		e.preventDefault(); 
		sendData(); 
	}); 
	function sendData() { 
		var xhr = new XMLHttpRequest(); 
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				document.getElementById("name").innerHTML = this.responseText; 
			}
		};
		xhr.open("POST", "options.json", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		var theData = document.getElementById("name").value; 
		xhr.send(); 
	} 
	
	<?php 
	/* 
	if (isset($_POST['name'])) { 
		$fp = fopen('options.json', 'w');
		fwrite($fp, json_encode($_POST['name']));
		fclose($fp); 
	} else { 
		echo "<dib> 'name' is not set </div> "; 
	} 

*/ 
?> 	
--> 