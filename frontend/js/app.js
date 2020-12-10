// PRODUCT LISTING

fetch('http://localhost:3002/api/cameras')
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

  		// VALUES & ATTRIBUTES

  		link.setAttribute('href', 'product-detail.html');
  		itemImage.setAttribute('src', data[i].imageUrl);
  		itemName.textContent = data[i].name;
  		itemPrice.textContent = '$ ' + data[i].price;

  		//LOCAL STORAGE

  		link.addEventListener('click', function(){

  			let myStorage = window.localStorage;
			myStorage.setItem('id', data[i]._id);

  		});

  		// HTML STRUCTURE

  		link.append(itemImage);
  		article.append(link);
  		article.append(itemName);
  		article.append(itemPrice);
  		li.append(article);
  		catalog.append(li);

  		// CLASSES 

  		catalog.classList.add('my-5');
  		li.classList.add('col-12', 'col-md-6', 'col-lg-4', 'card', 'shadow', 'm-2');
  		itemImage.classList.add('card-img-top', 'rounded');
  	}

});

