function askQuestions(){



		var firstName = prompt('What is your first name?');
		var lastName = prompt('What is your last name?');

		var fullName = firstName + ' ' + lastName;
		console.log('User is called ' + fullName);

		$('h2').text('German magic & leg double: Hello ' + fullName);


		// Age information and verification
		var userAge = prompt('How old are you?');
		userAge = parseInt(userAge);

		if (isNaN(userAge) === true){
		alert ('Please enter a number');
			checkAge();
		}


		if (userAge >= 18){
			console.log('User is an adult')
		}

		 else if (userAge >=13){
		 	console.log ('User is a teenager');
		 }
		 else {
		 	alert('Go away child');
		 }



		// Test before the break (&& ||)

		if (firstName === "General" && lastName !== "Assembly"){
			console.log('Hello General!')
		}
}

	// When the page loads
	$(function(){
		$('img').on('click'),askQuestions);

		// Hide all the sections
		$('h3').next().hide();
	



			// When the user clicks a h3 element
			$('h3').on('click',function(){



					// slideToggle the next element
					$(this).next().slideToggle();


			})


	});