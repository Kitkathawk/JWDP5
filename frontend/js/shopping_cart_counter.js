	// SHOPPING CART ITEMS COUNTER //

	let cartCounter = document.getElementById('cart-counter');
	shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

	if (shoppingCart.length > 0) {

		cartCounter.innerHTML = shoppingCart.length;

	}

	cartCounter.classList.add('d-inline', 'text-light', 'py-1', 'font-weight-bold');