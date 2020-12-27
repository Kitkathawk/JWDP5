
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

	if (shoppingCart === null || shoppingCart === undefined) {

		console.log('The shopping cart is empty');

	}

		// SHOPPING CART LIST ITEMS //

		let totalPrice = 0; 
		
		for (let i = 0; i < shoppingCart.length; i++) {

			let listShoppingCart = document.createElement('ul');
			let shoppingCartItem = document.createElement('li');

			totalPrice += parseFloat(shoppingCart[i].price);

			shoppingCartItem.textContent = shoppingCart[i].price;

			listShoppingCart.append(shoppingCartItem);
			document.getElementById('shopping-cart').append(listShoppingCart);
		}

			console.log(totalPrice)

