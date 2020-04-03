// Initialising variables needed
var shopping_cart_pressed = 0;
var data = {"total":0,"rows":[]};
var margin = 0;
var present = false;

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
  }else{
    $(".totalCount").text(0);
  }

  // Gets the name and the price of the item and adds it to the cart as well as updates local storage with it too
  $( ".action--add" ).click(function(event, source) {
    present = false;
    var name = $(this).attr("name_data");
    addProduct(name);
    var data_string = JSON.stringify(data);
    localStorage.setItem("cart", data_string);

		var cartItems = parseInt($('.totalCount').text(), 10);
    if (present === false){
      localStorage.setItem("totalItems", cartItems+1);
      $(".totalCount").text(localStorage.getItem('totalItems'));
    }else{
      present = true;
    }

  });


  $( ".action-sub" ).click(function(event, source) {
        present = false;
      var name = $(this).attr("name_data");
      subProduct(name); //Adds the product to the list of increases its total if present
      var data_string = JSON.stringify(data);
      localStorage.setItem("cart", data_string);
      var cartItems = parseInt($('.totalCount').text(), 10);
      if(present === true){
          localStorage.setItem("totalItems", cartItems-1); //Will subtract the cart total only if the item is present
      }
      $(".totalCount").text(localStorage.getItem('totalItems'));
    });



  $( ".letsCompare" ).click(function(event, source) {
    var cartItems = parseInt($('.totalCount').text(), 10);
    if (cartItems > 0){
      self.location="comparison.html";
    }else{
      $( ".overlay" ).fadeIn( "slow",
      function() {
        $( ".overlay" ).delay(5000).fadeOut("slow");
      });
      }
    });


  $( ".close" ).click(function(event) {
    event.preventDefault();
    $( ".overlay" ).hide();
  });

});


// Function which adds the product to the cart
function addProduct(name){
  'use strict';
  function add(){
    for(var i=0; i<data.total; i++){
      var row = data.rows[i];
      if (row.name === name){
        row.quantity += 1;
        present = true;
        return;
      }
    }
    // Add one to total and push the changes to the data
    data.total += 1;
    data.rows.push({
      name:name,
      quantity:1
    });
  }
  add();
}




function subProduct(name){
    console.log("sub fire")
  'use strict';
  function sub(){
    for(var i=0; i<data.total; i++){
        console.log("sub looping");
      var row = data.rows[i];
      if (row.name === name){
        // If the name is the same of the product, add one to the quantity instead of adding another product
        row.quantity -= 1;
        console.log(row.quantity);
        present = true;
      }
        console.log("pre splice")
        if(row.quantity < 1){
            console.log("splice");
            data.rows.pop(row);
            data.total -=1;
        }
    }
  }
  sub();
  }
