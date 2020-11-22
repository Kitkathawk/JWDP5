// PRODUCT LISTING

fetch('http://localhost:3002/api/cameras')
  .then(response => response.json())
  .then(function(data){
  	
  	let catalog = document.getElementById('listing');
  	
  	for (let i = 0; i < data.length; i++) {

  		let div = document.createElement('div');
  		let itemImage = document.createElement('img');
  		let itemName = document.createElement('h5');
  		let itemPrice = document.createElement('p');

  		itemImage.setAttribute('src', data[i].imageUrl);
  		itemName.textContent = data[i].name;
  		itemPrice.textContent = data[i].price;

  		div.classList.add("col-12", "col-lg-4", "product", "thumbnail", "thumbnail-3");

  		div.append(itemImage);
  		div.append(itemName);
  		div.append(itemPrice);
  		catalog.append(div);
  	}

  });


// PRODUCT DETAIL

fetch('http://localhost:3002/api/cameras/')
  .then(response => response.json())
  .then(function(data){

  	console.log(data);

  });