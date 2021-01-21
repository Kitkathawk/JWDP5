	// SHOPPING CART ITEMS COUNTER //

	let cartCounter = document.getElementById('cart-counter');
	let cartCounterMobile = document.getElementById('cart-mobile');

	shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

	if (shoppingCart) {

		if (shoppingCart.length > 0) {

		cartCounter.innerHTML = shoppingCart.length;
		cartCounterMobile.innerHTML = 'SHOPPING CART (' + shoppingCart.length + ') ';
		
		}

	}

	cartCounter.classList.add('d-inline', 'text-light', 'py-1', 'font-weight-bold');