
function localStorageSet(arr) {

	let myStorage = window.localStorage;
	myStorage.setItem('test', JSON.stringify(arr));

	let getTest = JSON.parse(myStorage.getItem('test'));

	return getTest;

}

function addItemToCart(arr) {

	for (let i = 0; i < arr.length; i++) {

		// DOM ELEMENTS

		let ul = document.createElement('ul');
		let li = document.createElement('li');
		let itemName = document.createElement('h4');
		let itemPrice = document.createElement('p');


		// VALUES & ATTRIBUTES

		itemName.textContent = arr[i].name;
		itemPrice.textContent = '$ ' + arr[i].price;
		

		// HTML STRUCTURE

		li.append(itemName);
		li.append(itemPrice);
		ul.append(li);
		document.body.append(ul);

	}

}

function itemCounter(arr) {

	let counter = 0;

	for (let i = 0; i < arr.length; i++) {

		counter += arr[i].quantity; 

	}

	return counter;

}

function itemTotal(arr) {

	let total = 0;

	for (let i = 0; i < arr.length; i++) {

		total += parseFloat((arr[i].price * arr[i].quantity));

	}

	return total;

}

function removeFromLocalStorage(arr) {

	arr.splice(0, 1);

	localStorage.removeItem('test2');

	let sendToLocalStorage = JSON.stringify(arr);

	localStorage.setItem('test2', sendToLocalStorage);

	return arr;

}

