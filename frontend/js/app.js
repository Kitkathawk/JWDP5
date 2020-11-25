// PRODUCT LISTING

fetch('http://localhost:3002/api/cameras')
  .then(response => response.json())
  .then(function(data){
  	
  	let catalog = document.getElementById('listing');
  	
  	for (let i = 0; i < data.length; i++) {

  		let li = document.createElement('li');
  		let article = document.createElement('article');
  		let link = document.createElement('a');
  		let itemImage = document.createElement('img');
  		let itemName = document.createElement('h5');
  		let itemPrice = document.createElement('p');

  		itemImage.setAttribute('src', data[i].imageUrl);
  		itemName.textContent = data[i].name;
  		itemPrice.textContent = data[i].price;

  		li.classList.add('col', 'col-lg-4', 'card');
  		itemImage.classList.add('card-img-top', 'rounded', 'shadow');

  		link.append(itemImage);
  		article.append(link);
  		article.append(itemName);
  		article.append(itemPrice);
  		li.append(article);
  		catalog.append(li);

  		link.setAttribute('href', 'http://localhost:3002/api/cameras/' + data[i]._id);
  	}

  });


// PRODUCT DETAIL

fetch('http://localhost:3002/api/cameras/_id')
  .then(response => response.json())
  .then(function(data){

  	console.log(data);

  });