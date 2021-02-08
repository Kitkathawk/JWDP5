	// SHOPPING CART ITEMS COUNTER //

	let cartCounter = document.getElementById('cart-counter');
	let cartCounterMobile = document.getElementById('cart-mobile');

	shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

	function shoppingCartCounter(arr) {

		let counter = 0;
	
		if (arr && arr.length > 0) {

			for (let i = 0; i < arr.length; i++) {

				counter = arr[i].quantity * arr.length;

			}

		}

		return counter; 

	}

	cartCounter.innerHTML = counter;
	cartCounterMobile.innerHTML = 'SHOPPING CART (' + counter + ') ';

	shoppingCartCounter(shoppingCart); 
	
	cartCounter.classList.add('d-inline', 'text-light', 'py-1', 'font-weight-bold');