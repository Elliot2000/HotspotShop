var data = {"total":0,"rows":[]};

$(document).ready(function() {

  // Checking if local storage exists and if it has item called cart
  if(localStorage && localStorage.getItem('cart')){

    // Declare variables using data in the local storage
    var cart = localStorage.getItem('cart');
    var totalItems = parseInt(localStorage.getItem('totalItems'), 10);

    $(".totalCount").text(totalItems);

    // Parse JSON data from local storage so it can be display in the cart and display it in carts
    var items = JSON.parse(cart);
    data = items;


    for (i = 0; i < totalItems; i++) {
      addRow(items["rows"][i]["name"], items["rows"][i]["quantity"]);
    }

  }else{
    $(".totalCount").text(0);
  }

  $( ".goBackButton" ).click(function(event) {
    localStorage.clear();
    location.reload();
  });


  function addRow (itemName, itemQuantity) {
  document.querySelector('.ActualList').insertAdjacentHTML(
    'afterbegin',
    `  <div class="ItemList">
          <div id="Item1" class="itemTab">` + itemName + `<br><span class="itemPrice">` + itemQuantity + ` x £0</span></div>
          <div id="Item2" class="itemTab">` + itemName + `<br><span class="itemPrice">` + itemQuantity + ` x £0</span></div>
      </div>`
  )
}

});
