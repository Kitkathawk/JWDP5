fetch('http://localhost:3002/api/cameras')
  .then(response => response.json())
  .then(function(data){

  	console.log(data)
  	
  	let catalog = document.getElementById('listing');
  	
  	for (let i = 0; i < data.length; i++) {

  		let ul = document.createElement('ul');
  		let imageUrlLi = document.createElement('li');
  		let nameLi = document.createElement('li');
  		let priceLi = document.createElement('li');

  		imageUrlLi.textContent = data[i].imageUrl;
  		nameLi.textContent = data[i].name;
  		priceLi.textContent = data[i].price;

  		ul.append(imageUrlLi);
  		ul.append(nameLi);
  		ul.append(priceLi);
  		catalog.append(ul);
  	}

  });