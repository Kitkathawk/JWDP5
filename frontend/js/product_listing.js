// PRODUCT LISTING //

fetch('http://localhost:3002/api/cameras')
  .then(response => response.json())
  .then(function(data){
    console.log(data)
  	
  	let catalog = document.getElementById('listing');
  	
  	for (let i = 0; i < data.length; i++) {

  		// DOM ELEMENTS

  		let li = document.createElement('li');
  		let link = document.createElement('a');
      let article = document.createElement('article');
  		let itemImage = document.createElement('img');
      let div = document.createElement('div');
  		let itemName = document.createElement('h5');
  		let itemPrice = document.createElement('p');

  		// VALUES & ATTRIBUTES

      article.setAttribute('style', 'margin-bottom: 30px');
  		link.setAttribute('href', 'product-detail.html');
  		itemImage.setAttribute('src', data[i].imageUrl);
      itemImage.setAttribute('style', 'height: 190px; object-fit: cover;');
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
      div.append(itemName);
      div.append(itemPrice);
  		article.append(div);
      li.append(article);
  		catalog.append(li);

  		// CLASSES 

  		catalog.classList.add('mt-4', 'mb-5', 'p-0');
      article.classList.add('card', 'shadow');
  		li.classList.add( 'col-12', 'col-md-6', 'col-lg-4', 'list-unstyled');
  		itemImage.classList.add('card-img-top', 'rounded-top');
      div.classList.add('card-body');
  	}

});

