var data = {"total":0,"rows":[]};


// Function that will run on startup of the script
$(document).ready(function() {

  // Checking if local storage exists and if it has item called cart
  if(localStorage && localStorage.getItem('cart')){

    // Declare variables using data in the local storage
    var cart = localStorage.getItem('cart');
    var totalItems = parseInt(localStorage.getItem('totalItems'), 10);
    var total1 = 0, total2= 0;

    // Setting text to the total amount of items in the cart
    $(".totalCount").text(totalItems);

    // Parse JSON data from local storage so it can be display in the cart and display it in carts
    var items = JSON.parse(cart);
    data = items;

    // Calculating the total price for both supermarkets
    for (i = 0; i < items["total"]; i++) {
      addRow(items["rows"][i]["name"], items["rows"][i]["quantity"], items["rows"][i]["price1"], items["rows"][i]["price2"]);
      total1 += parseFloat(items["rows"][i]["price1"].substring(1)) * parseInt(items["rows"][i]["quantity"]);
      total2 += parseFloat(items["rows"][i]["price2"].substring(1)) * parseInt(items["rows"][i]["quantity"]);

    }

    // Displaying both prices (rounding them before displaying)
    $(".priceTotal1").text(Math.round((total1 + Number.EPSILON) * 100) / 100);
    $(".priceTotal2").text(Math.round((total2 + Number.EPSILON) * 100) / 100);

    // Seeing which price is bigger and showing the total savings based on that price
    if(total1 > total2){
      $(".totalSaving").text(Math.round(((total1-total2) + Number.EPSILON) * 100) / 100);
    }else{
      $(".totalSaving").text(Math.round(((total2-total1) + Number.EPSILON) * 100) / 100);
    }


  }else{
    // If there no local storage, set item total to zero
    $(".totalCount").text(0);
  }

  // Back button allowing to go to the item selection screen. Before that happens the local storage is cleared to allow for new comparison
  $( ".goBackButton" ).click(function(event) {
    localStorage.clear();
    location.reload();
  });

  // Function which adds row in the final table, that include items name, quantity and price
  function addRow (itemName, itemQuantity, itemPrice1, itemPrice2) {
  document.querySelector('.ActualList').insertAdjacentHTML(
    'afterbegin',
    `  <div class="ItemList">
          <div id="Item1" class="itemTab">` + itemName + `<br><span class="itemPrice">` + itemQuantity + ` x ` + itemPrice1 + `</span></div>
          <div id="Item2" class="itemTab">` + itemName + `<br><span class="itemPrice">` + itemQuantity + ` x ` + itemPrice2 + `</span></div>
      </div>`
  )
}

});
