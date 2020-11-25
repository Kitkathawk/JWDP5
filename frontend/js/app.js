// PRODUCT LISTING

/*fetch('http://localhost:3002/api/cameras')
  .then(response => response.json())
  .then(function(data){
  	
  	let catalog = document.getElementById('listing');
  	
  	for (let i = 0; i < data.length; i++) {

  		// DOM ELEMENTS

  		let li = document.createElement('li');
  		let article = document.createElement('article');
  		let link = document.createElement('a');
  		let itemImage = document.createElement('img');
  		let itemName = document.createElement('h5');
  		let itemPrice = document.createElement('p');

  		// HTML STRUCTURE

  		link.append(itemImage);
  		article.append(link);
  		article.append(itemName);
  		article.append(itemPrice);
  		li.append(article);
  		catalog.append(li);

  		// VALUES & ATTRIBUTES

  		link.setAttribute('href', data[i]._id);
  		itemImage.setAttribute('src', data[i].imageUrl);
  		itemName.textContent = data[i].name;
  		itemPrice.textContent = data[i].price;

  		// CLASSES 

  		li.classList.add('col-12', 'col-md-6', 'col-lg-4', 'card');
  		itemImage.classList.add('card-img-top', 'rounded', 'shadow');
  	}

  });*/

  let _id = '5be1ed3f1c9d44000030b061';

  fetch(`http://localhost:3002/api/cameras/${_id}`)
  .then(response => response.json())
  .then(function(data){

  	console.log(data);


  });


// PRODUCT DETAIL //5be1ed3f1c9d44000030b061

/*fetch('http://localhost:3002/api/cameras')
  .then(response => response.json())
  .then(function(data){

	let productDetail = document.getElementById('product-detail');

	for (let i = 0; i < data.length; i++) {	

		// DOM ELEMENTS

  		let article = document.createElement('article');
  		let itemImage = document.createElement('img');
  		let itemName = document.createElement('h5');
  		let itemPrice = document.createElement('p');
  		let itemDescription = document.createElement('p');
  		let chooseLens = document.createElement('select');
  		let lensOption = document.createElement('option');

  		// HTML STRUCTURE

  		chooseLens.append(lensOption);
  		article.append(itemImage);
  		article.append(itemName);
  		article.append(itemPrice);
  		article.append(itemDescription);
  		article.append(chooseLens);
  		productDetail.append(article);

  		// VALUES & ATTRIBUTES

  		itemImage.setAttribute('src', data[i].imageUrl);
  		itemName.textContent = data[i].name;
  		itemPrice.textContent = data[i].price;
  		itemDescription.textContent = data[i].description;
  	
  	}

});*/

