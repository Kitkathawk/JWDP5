
// GET SHOPPING CART FROM LOCAL STORAGE & SET-UP PLACE ORDER EVENT LISTENER //

let placeOrder = document.getElementById('contact-form');
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

placeOrder.addEventListener('submit', function(event) {
	
	let inputs = document.getElementsByTagName('input');

	for (let i = 0; i < inputs.length; i++) {

		if (!inputs[i].value) {

		} else if (inputs[i].value) {

			event.preventDefault();

		}

	}


	// RETRIVE VALUES FROM CONTACT FORM // 

	let firstName = document.getElementById("inputFirstName").value;
	let lastName = document.getElementById("inputLastName").value;
	let address = document.getElementById("inputAddress").value;
	let city = document.getElementById("inputCity").value;
	let zip = document.getElementById("inputZip").value;
	let country = document.getElementById("inputCountry").value;
	let email = document.getElementById("inputEmail").value;
	let phone = document.getElementById("inputPhone").value;

	// SET-UP CONTACT OBJ + PRODUCTS ARR + TOTAL PRICE

	let contact = { firstName, lastName, address, city, zip, country, email, phone };
	let products = [];
	let totalPrice = 0;

	for (let i = 0; i < shoppingCart.length; i++) {

		products.push(shoppingCart[i]._id);

		totalPrice += parseFloat(shoppingCart[i].price);

	}

	// SET-UP POST REQUEST //

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

		localStorage.setItem("orderId", data.orderId);
        localStorage.setItem("totalPrice", totalPrice);
        window.location.href = "confirmation.html?orderId=" + data.orderId;

	}).catch(error => alert('Whoops! Something went wrong...'));

});



	window.addEventListener('load', function() {
    
    let form = document.getElementsByClassName('needs-validation');
 
    let validation = Array.prototype.filter.call(form, function(form) {

      form.addEventListener('submit', function(event) {

        if (form.checkValidity() === false) {

          event.preventDefault();
          event.stopPropagation();

        }

        form.classList.add('was-validated');

      }, false);

    });

  });




	


