// SHOPPING CART ITEMS COUNTER //

let cartCounter = document.getElementById('cart-counter');
let cartCounterMobile = document.getElementById('cart-mobile');

shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

let counter = 0;

function shoppingCartCounter(arr) {

	if (arr && arr.length > 0) {

		for (let i = 0; i < arr.length; i++) {

			counter += arr[i].quantity;

		}

	}

	return counter; 

}

let counterTotal = shoppingCartCounter(shoppingCart);

cartCounter.innerHTML = counterTotal;
cartCounterMobile.innerHTML = 'SHOPPING CART (' + counterTotal + ') ';

cartCounter.classList.add('d-inline', 'text-light', 'py-1', 'font-weight-bold');

if (shoppingCart === null || shoppingCart === undefined || shoppingCart.length === 0) {

	cartCounter.classList.remove('d-inline');
	cartCounter.classList.add('d-none');

}