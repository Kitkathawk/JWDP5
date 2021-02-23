
// GET ORDER ID & TOTAL PRICE FROM LOCAL STORAGE //

let orderId = localStorage.getItem('orderId');
let totalPrice = localStorage.getItem('totalPrice');


// ORDER CONFIRMATION MESSAGE //

	// DOM ELEMENTS

	let orderConfirmation = document.getElementById('confirmation');
	let thanksOrder = document.createElement('h1');
	let textOrderPrice = document.createElement('p');
	let textOrderId = document.createElement('p');
	let redirectHome = document.createElement('p'); 

	// VALUES & ATTRIBUTES

	thanksOrder.innerHTML = 'Thank you for your purchase!';
	textOrderPrice.innerHTML = 'The total amount of your order is $ ' + totalPrice + '.'; 
	textOrderId.innerHTML = 'Your order ID is <span class="text-info font-weight-bold">' + orderId + '</span>.'; 
	redirectHome.innerHTML = 'Keep browsing on our <a href="index.html">Homepage</a>, while we take care of your order!';

	// HTML STRUCTURE

	orderConfirmation.append(thanksOrder);
	orderConfirmation.append(textOrderPrice); 
	orderConfirmation.append(textOrderId); 
	orderConfirmation.append(redirectHome);

	// CLASSES

	thanksOrder.classList.add('h4', 'my-4');
	redirectHome.classList.add('my-5');