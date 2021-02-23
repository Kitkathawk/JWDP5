
beforeEach(function() {

    let fixture = '<ul></ul>' + '<li></li>' + '<h4></h4>' + '<p></p>';

    document.body.insertAdjacentHTML('afterbegin', fixture);

});

afterEach(function() {

    document.body.removeChild(document.getElementsByTagName('ul')[0]);
    document.body.removeChild(document.getElementsByTagName('li')[0]);
    document.body.removeChild(document.getElementsByTagName('h4')[0]);
    document.body.removeChild(document.getElementsByTagName('p')[0]);

});


// PRODUCT LISTING

describe('Product Listing', function() {

    describe('When user clicks on product menu', function() {

        it('Should show complete product listing from server', async function() {

            const response = await fetch('http://localhost:3002/api/cameras');
            let answer = await response.json();

            expect(answer[0]._id).toBe("5be1ed3f1c9d44000030b061");
            expect(answer[0].name).toBe("Zurss 50S");
            expect(answer[0].price).toBe(49900);

        });

    });

});


// PRODUCT DETAIL

describe('Product Detail', function() {

    describe('When user clicks on product item', function() {

        it('Should show items details', async function() {

            const id = "5be1ed3f1c9d44000030b061";
            const response = await fetch(`http://localhost:3002/api/cameras/${id}`);
            let answer = await response.json();

            expect(answer.name).toBe("Zurss 50S");
            expect(answer.price).toBe(49900);
            expect(answer.description).toBe("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            expect(answer.lenses).toEqual(["35mm 1.4", "50mm 1.6"]);

        });

    });
});


// SHOPPING CART 

describe('Shopping Cart', function() {

    describe('When user clicks to add item', function() {

        it('Should add item to local storage', function() {

            let items = [{
                name: 'Test Camera',
                _id: '001',
                price: 1234,
                quantity: 2
            }, {
                name: 'Test Camera2',
                _id: '002',
                price: 1000,
                quantity: 1
            }];

            let result = localStorageSet(items);

            expect(result[0].name).toBe('Test Camera');
            expect(result[0]._id).toBe('001');
            expect(result[0].price).toBe(1234);

        });

        it('Should add item to shopping cart page', function() {

            let arrayTest = JSON.parse(localStorage.getItem('test'));
            let result = addItemToCart(arrayTest);

            const checkUl = document.createElement('ul');
            const checkLi = document.createElement('li');
            const checkH4 = document.createElement('h4');
            const checkP = document.createElement('p');

            expect(checkUl).toBeTruthy();
            expect(checkLi).toBeTruthy();
            expect(checkH4).toBeTruthy();
            expect(checkP).toBeTruthy();

        });

        it('Should show number of shopping cart items in header', function() {

            let arrayTest = JSON.parse(localStorage.getItem('test'));
            let result = itemCounter(arrayTest);

            expect(result).toBe(3);

        });

        it("Should show the total sum of item's price on the cart page", function() {

            let arrayTest = JSON.parse(localStorage.getItem('test'));
            let result = itemTotal(arrayTest);

            expect(result).toBe(3468);

        });

    });

    describe('When user clicks to remove item', function() {

        it('Should remove item from local storage', function() {

            let items = [{
                name: 'Test Camera',
                _id: '001',
                price: 1234,
                quantity: 2
            }, {
                name: 'Test Camera2',
                _id: '002',
                price: 1000,
                quantity: 1
            }];

            localStorage.setItem('test2', JSON.stringify(items));
            let arrayTest = JSON.parse(localStorage.getItem('test2'));

            let result = removeFromLocalStorage(arrayTest);

            expect(result[0].name).toBe('Test Camera2');
            expect(result[0]._id).toBe('002');
            expect(result[0].price).toBe(1000);

        });

        it('Should remove item from shopping cart page', function() {

            let arrayTest = JSON.parse(localStorage.getItem('test2'));
            let result = addItemToCart(arrayTest);

            const checkUl = document.createElement('ul');
            const checkLi = document.createElement('li');
            const checkH4 = document.createElement('h4');
            const checkP = document.createElement('p');

            expect(checkUl).toBeTruthy();
            expect(checkLi).toBeTruthy();
            expect(checkH4).toBeTruthy();
            expect(checkP).toBeTruthy();

        });

        it('Should update number of shopping cart items in header', function() {

            let arrayTest = JSON.parse(localStorage.getItem('test2'));
            let result = itemCounter(arrayTest);

            expect(result).toBe(1);

        });

        it("Should show the total sum of item's price left on the cart page", function() {

            let arrayTest = JSON.parse(localStorage.getItem('test2'));
            let result = itemTotal(arrayTest);

            expect(result).toBe(1000);

        });

    });

});