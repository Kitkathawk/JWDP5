
let placeOrder = document.getElementById('contact-form');

placeOrder.addEventListener('submit', function(event) {

	let error = 'You need to complete all fields!';

	let inputs = document.getElementsByTagName('input');

	for (let i = 0; i < inputs.length; i++) {

		if (!inputs[i].value) {

		} else if (inputs[i].value) {

			event.preventDefault();
			error = undefined;

		}

	}

	if (error) {
		alert('You need to complete all fields!');
	}

	let firstName = document.getElementById("inputFirstName").value;
	let lastName = document.getElementById("inputLastName").value;
	let address = document.getElementById("inputAddress").value;
	let city = document.getElementById("inputCity").value;
	let zip = document.getElementById("inputZip").value;
	let country = document.getElementById("inputCountry").value;
	let email = document.getElementById("inputEmail").value;
	let phone = document.getElementById("inputPhone").value;

	let contact = { firstName, lastName, address, city, zip, country, email, phone };
	let products = [];

	console.log(contact);


	fetch('http://localhost:3002/api/cameras/order', 

		{
			method: 'post',
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ products, contact }),
		}

	)

	.then(function(response) {

		return response.json();

	}).then(function(data) {

		console.log(data)

		if (data) {
			window.location.href = '/';
		} //try catch

	});

});


	


