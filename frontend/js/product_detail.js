// PRODUCT DETAIL //

let myStorage = window.localStorage;
const id = myStorage.getItem('id');

fetch(`http://localhost:3002/api/cameras/${id}`)
.then(response => response.json())
.then(function(data){

	let productDetail = document.getElementById('product-detail');

	// DOM ELEMENTS

	let article = document.createElement('article');
	let div = document.createElement('div');
	let itemImage = document.createElement('img');
	let itemName = document.createElement('h1');
	let itemPrice = document.createElement('p');
	let itemDescription = document.createElement('p');
	let chooseLens = document.createElement('select');
	let chooseLensLabel = document.createElement('label');
	let shoppingCartBtn = document.createElement('button');

	// VALUES & ATTRIBUTES

	itemImage.setAttribute('src', data.imageUrl);
	itemImage.setAttribute('style', 'object-fit: cover;');
	itemName.textContent = data.name;
	itemPrice.textContent = '$ ' + data.price;
	itemDescription.textContent = data.description;
	chooseLens.setAttribute('id', 'lenses');
	chooseLensLabel.setAttribute('for', 'lenses');
	chooseLensLabel.textContent = 'Select lens:';
	shoppingCartBtn.setAttribute('id', 'cart');

	let lenses = data.lenses;	
	
	for (let i = 0; i < lenses.length; i++) {

		let lensOption = document.createElement('option');
		chooseLens.append(lensOption);
		lensOption.textContent = lenses[i];

	}

	shoppingCartBtn.textContent = 'Add to Shopping Cart!'

	// HTML STRUCTURE

	article.append(itemImage);
	div.append(itemName);
	div.append(itemPrice);
	div.append(itemDescription);
	div.append(chooseLensLabel);
	div.append(chooseLens);
	div.append(shoppingCartBtn);
	article.append(div);
	productDetail.append(article);

	// CLASSES 

	article.classList.add('col-10', 'col-md-12', 'col-lg-10',  'px-0', 'card', 'mx-auto', 'mt-4', 'mb-5', 'd-flex', 'flex-column', 'flex-md-row', 'shadow');
	div.classList.add('card-body', 'col-12', 'col-md-6');
	itemName.classList.add('h5');
	itemImage.classList.add('col-12', 'col-md-6','card-img-top', 'rounded', 'img-fluid', 'px-0', 'pl-md-0');
	itemDescription.classList.add('mb-4');
	chooseLensLabel.classList.add('mr-2');
	chooseLens.classList.add('bg-light');
	shoppingCartBtn.classList.add('btn', 'btn-warning', 'mt-5', 'd-block', 'font-weight-bold');


// SHOPPING CART //

let addToCart = document.getElementById('cart');

addToCart.addEventListener('click', function(){

	if (!localStorage.getItem('shoppingCart')) {

		let sendToLocalStorage = JSON.stringify([]);

		localStorage.setItem('shoppingCart', sendToLocalStorage);

	}

	shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

	shoppingCart.push(data);

	let sendToLocalStorage = JSON.stringify(shoppingCart);

	localStorage.setItem('shoppingCart', sendToLocalStorage);


		// ITEM QUANTITY

		let quantityItem = {}; 

		for (let i = 0; i < shoppingCart.length; i++) {

			if (quantityItem[shoppingCart[i]._id] === undefined) {

				quantityItem[shoppingCart[i]._id] = 1;

			} else {

				quantityItem[shoppingCart[i]._id] += 1;

			}

		};

		sendToLocalStorage = JSON.stringify(quantityItem);

		localStorage.setItem('quantityItem', sendToLocalStorage);

		quantityItem = JSON.parse(localStorage.getItem('quantityItem'));

		location.reload();

	});

});

/* 

	let newShoppingCart = [{
		_id: id,
		image: img,
		quantity: quantity,
		price: price
	}]

*/