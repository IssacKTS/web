function addToBasket(button) {
    var product = button.parentNode;
    var productName = product.querySelector('h3').textContent;
    var productDescription = product.querySelector('.description').textContent;
    var productPrice = product.querySelector('.price').textContent;
    var productImageSrc = product.querySelector('img').getAttribute('src');

    var item = {
        name: productName,
        description: productDescription,
        price: productPrice,
        imageSrc: productImageSrc
    };

    var items = localStorage.getItem('basketItems');

    if (items) {
        items = JSON.parse(items);
    } else {
        items = [];
    }

    // Add the selected item to the array
    items.push(item);

    // Store the updated array back in local storage
    localStorage.setItem('basketItems', JSON.stringify(items));

    // Redirect the user to the basket.html page
    window.location.href = 'basket.html';
}

