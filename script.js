function sortItems(sortOption) {
    var productContainer = document.getElementById("featured-products");
    var products = productContainer.getElementsByClassName("product");
    var sortedItems = Array.prototype.slice.call(products);
  
    if (sortOption === "priceLowToHigh") {
      sortedItems.sort(function (a, b) {
        var priceA = parseFloat(
          a.getElementsByClassName("price")[0].innerText.replace("£", "")
        );
        var priceB = parseFloat(
          b.getElementsByClassName("price")[0].innerText.replace("£", "")
        );
        return priceA - priceB;
      });
    } else if (sortOption === "priceHighToLow") {
      sortedItems.sort(function (a, b) {
        var priceA = parseFloat(
          a.getElementsByClassName("price")[0].innerText.replace("£", "")
        );
        var priceB = parseFloat(
          b.getElementsByClassName("price")[0].innerText.replace("£", "")
        );
        return priceB - priceA;
      });
    }
  
    for (var i = 0; i < sortedItems.length; i++) {
      productContainer.appendChild(sortedItems[i]);
    }
  }
  