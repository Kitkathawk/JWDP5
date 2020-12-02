// PRODUCT DETAIL

let myStorage = window.localStorage;
const id = myStorage.getItem('id');

fetch(`http://localhost:3002/api/cameras/${id}`)
  .then(response => response.json())
  .then(function(data){

  	let productDetail = document.getElementById('product-detail');

	// DOM ELEMENTS

	let article = document.createElement('article');
	let itemImage = document.createElement('img');
	let itemName = document.createElement('h5');
	let itemPrice = document.createElement('p');
	let itemDescription = document.createElement('p');
	let chooseLens = document.createElement('select');
	let chooseLensLabel = document.createElement('label');
	let lensOption = document.createElement('option');
	let shoppingCartBtn = document.createElement('button');

	// VALUES & ATTRIBUTES

	itemImage.setAttribute('src', data.imageUrl);
	itemName.textContent = data.name;
	itemPrice.textContent = data.price;
	itemDescription.textContent = data.description;
	chooseLens.setAttribute('id', 'lenses');
	chooseLensLabel.setAttribute('for', 'lenses');
	chooseLensLabel.textContent = 'Select lens:';

	let lenses = data.lenses;
	
	for (let i = 0; i < lenses.length; i++) {

		lensOption.textContent += lenses[i];

	}

	shoppingCartBtn.textContent = 'Add to Shopping Cart!'

	// HTML STRUCTURE

	chooseLens.append(lensOption);
	article.append(itemImage);
	article.append(itemName);
	article.append(itemPrice);
	article.append(itemDescription);
	article.append(chooseLensLabel);
	article.append(chooseLens);
	article.append(shoppingCartBtn);
	productDetail.append(article);

	// CLASSES 

  	article.classList.add('col-12', 'col-md-6', 'col-lg-4', 'card', 'mx-auto');
  	itemImage.classList.add('card-img-top', 'rounded', 'shadow');
  	shoppingCartBtn.classList.add('btn', 'btn-warning', 'btn-lg');

});