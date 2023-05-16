function clearBasket() {
    localStorage.removeItem('basketItems');
  
    var table = document.getElementById('basket-table');
    table.innerHTML = '';
  
    alert('Basket cleared successfully!');
  }
  