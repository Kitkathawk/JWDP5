
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

if (shoppingCart === null || shoppingCart === undefined) {

	document.getElementById('shopping-cart').innerHTML = 'The shopping cart is empty.';

}

		// SHOPPING CART LIST ITEMS //

		let totalPrice = 0; 
		
		for (let i = 0; i < shoppingCart.length; i++) {

			// DOM ELEMENTS

			let listShoppingCart = document.getElementById('shopping-cart');
			let shoppingCartItem = document.createElement('li');
			let itemImage = document.createElement('img');
			let itemName = document.createElement('h4');
			let itemPrice = document.createElement('p');
			let deleteItem = document.createElement('img');

			// VALUES & ATTRIBUTES

			itemImage.setAttribute('src', shoppingCart[i].imageUrl);
			itemName.textContent = shoppingCart[i].name;
			itemPrice.textContent = '$ ' + shoppingCart[i].price;
			deleteItem.setAttribute('src', 'icons/trash-alt-regular.svg');
			deleteItem.setAttribute('style', 'height: 20px; cursor: pointer;');

			// HTML STRUCTURE

			shoppingCartItem.append(itemImage);
			shoppingCartItem.append(itemName);
			shoppingCartItem.append(itemPrice);
			shoppingCartItem.append(deleteItem);
			listShoppingCart.append(shoppingCartItem);

			// CLASSES 

			listShoppingCart.classList.add('col-12', 'list-unstyled', 'mt-4', 'mb-1', 'p-sm-0');
			shoppingCartItem.classList.add('col-12', 'card', 'flex-sm-row', 'shadow', 'd-sm-flex', 'align-items-center', 'pl-0', 'pr-0', 'my-3');
			itemImage.classList.add('col-12', 'col-sm-3', 'card-img-top', 'img-fluid', 'pl-0', 'pr-0', 'rounded');
			itemName.classList.add('col-12', 'col-sm-4', 'mb-0');
			itemPrice.classList.add('col-12', 'col-sm-3', 'text-md-right', 'mb-0');
			deleteItem.classList.add('col-2', 'delete');
			
			// ADDING UP TOTAL PRICE

			totalPrice += parseFloat(shoppingCart[i].price);

		}


		// SETTING UP TOTAL SUM DIV //

		document.getElementById('total-text').innerHTML = 'Total: ';
		document.getElementById('total-sum').innerHTML = '$ ' + totalPrice;

		document.getElementById('total').classList.add('card', 'shadow', 'py-2', 'border-info', 'text-dark');
		document.getElementById('total').style = 'border: 3px solid;';
		document.getElementById('total-text').classList.add('font-weight-bold');
		document.getElementById('total-sum').classList.add('text-right');


		// SETTING UP CHECKOUT BTN //

		let checkoutBtn = document.createElement('button');
		let link = document.createElement('a');

			//VALUES & ATTRIBUTES

			checkoutBtn.textContent = 'Checkout';
			link.setAttribute('href', 'checkout.html');

			// HTML STRUCTURE

			document.getElementById('checkout').append(link);
			link.append(checkoutBtn);

			// CLASSES

			checkoutBtn.classList.add('btn', 'bg-warning', 'text-dark', 'shadow', 'mb-5', 'font-weight-bold');
			checkoutBtn.style = 'float: right;';



		// REMOVE ITEMS FROM CART //

		let deleteIcon = document.getElementsByClassName('delete'); 

		for (let i = 0; i < deleteIcon.length; i++) {

			deleteIcon[i].addEventListener('click', function(){

				

			});

		}





