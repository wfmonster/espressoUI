// Form event listeners


// If you have a name property you can access the form element
// via that property. 
// documents.forms.frmContact >> documents.fomrs.frmContact.name

// main events
/*
	onfocus
	onblur
	onchange
	onkeypress
	onkeydown
	onkeyup
*/

// Checkboxes and radio buttons
/*  Main property
	mycheckbox.checked --> (true or false)

	Main events: onclick, onchange
*/

// Select Lists 
/*  Main property
	mySelect.type (select-one or select-multiple)

	Main events: onchange
	Read which option is select via: 
	mySelect.selectedIndex (select-one)
	mySelect.options[x].selected (true or false )(select-multiple)

*/

// Form Events
/*
	main event: onsubmit 
	You can interrupt it before it actually gets sent to the server, and even
	prevent it from submitting by returning false from the event handler.
*/


	// // ( !not used currently! ) handles the form submit event
	// function formSubmitCheck(){
	// 	document.getElementById("frmContact").onsubmit = function(){
	// 		// orevent a from from submittting if there is no email.
	// 		if(document.getElementById("email").value == ""){
	// 			document.getElementById("errorMessage").innerHTML = "Please provide at least an email address!";
	// 			// to STOP the from from submitting
	// 			return false;
	// 		} else {
	// 			// reset and allow the form to submit
	// 			document.getElementById("errorMessage").innerHTML = "";
	// 			return true;
	// 		}
	// 	};
	// }

	// // ( !not used currently! ) Show and hide sections of a from 
	// function toggleFormElements(){
	// 	document.getElementById("brochures").onclick = function (){
	// 		if(document.getElementById("brochures").checked){
	// 			// Use CSS to display it. 
	// 			document.getElementById.("tourSelection").style.display = "block";
	// 		} else {
	// 			// otherwise hide it.
	// 			document.getElementById("tourSelection").style.display = "none";
	// 		}
	// 	};
	// 	// hides the element on the initial page load.
	// 	document.getElementById("tourSelection").style.display = "none";
	// }

function formEvents(){

	var emailField = document.getElementById("email");
	var emailField2 = document.getElementById("email2");

	function emailFocus(id){

		id.onfocus = function(){
			if(id.value == "name@email.com"){
				id.value = " ";
			}
		};

		id.onblur = function(){
			if(id.value == " "){
				id.value = "name@email.com";
			}
		};
	}
	emailFocus(emailField);
	emailFocus(emailField2);
	

	$('form').find("input[type=textarea], input[type=password], textarea").each(function(ev) {

	      if(!$(this).val()) { 
	    	 $(this).attr("placeholder", "Type your answer here");
	  	  }
  	});


    /* 
       Validation input[type="text"] form fields. Displays an error if the user leaves the 
       field without typing a value that has a value of 'string'. Verifies that a variable is defined, 
       is a string and is not non-empty

       // TO-DO: 
       // validate phone numbers with RegEx
       // Validate email with RegEx
       // Validate numerical input: zipcode, age etc.
    */
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var city = document.getElementById("city");
	var message = document.getElementById("message");
	var zip = document.getElementById("zipcode");

	function textFieldValidation(e){

		e.onblur = function() {
			if(((typeof e.value != 'undefined' && e) && e.value.length > 0) && 
				typeof e.value.valueOf() == 'string'){
				e.style.borderBottom = "4px solid green";
			} else {
				e.style.borderBottom = "4px solid red";
			}
		};
	} // end of nameValidation

	textFieldValidation(fname);
	textFieldValidation(lname);
	textFieldValidation(city);
	textFieldValidation(address);
	textFieldValidation(message);
	textFieldValidation(zipcode)


	

} // End of Form Events


window.onload = function() {
	formEvents();
}























