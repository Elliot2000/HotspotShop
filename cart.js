// Initialising variables needed
var shopping_cart_pressed = 0;
var data = {"total":0,"rows":[]};
var margin = 0;
var present = false;

var itemName1, itemName2, itemPrice1, itemPrice2;

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
  $( ".action-add" ).click(function(event, source) {
      present = false;
    var name = $(this).attr("name_data");
    if(name == "Skimmed Milk 2.2L"){
      itemName1 = "skimmed_milk_2";
      itemName2 = "skimmed_milk_2_2";
      $(".skimmed_milk_2_quantity").text(1 + parseInt(document.getElementsByClassName("skimmed_milk_2_quantity")[0].innerHTML));
    }else if (name == "Semi Milk Skimmed 2.2L"){
      itemName1 = "semi_skimmed_milk_2";
      itemName2 = "semi_skimmed_milk_2_2";
      $(".semi_skimmed_milk_2_quantity").text(1 + parseInt(document.getElementsByClassName("semi_skimmed_milk_2_quantity")[0].innerHTML));
    }else if (name == "Whole Milk 2.2L"){
      itemName1 = "whole_milk_2";
      itemName2 = "whole_milk_2_2";
      $(".whole_milk_2_quantity").text(1 + parseInt(document.getElementsByClassName("whole_milk_2_quantity")[0].innerHTML));
    }else if (name == "Gouda 10 Slices"){
      itemName1 = "gouda";
      itemName2 = "gouda_2";
      $(".gouda_quantity").text(1 + parseInt(document.getElementsByClassName("gouda_quantity")[0].innerHTML));
    }else if (name == "Philadelphia Original"){
      itemName1 = "philadelphia";
      itemName2 = "philadelphia_2";
      $(".philadelphia_quantity").text(1 + parseInt(document.getElementsByClassName("philadelphia_quantity")[0].innerHTML));
    }else if (name == "Cheddar Mature"){
      itemName1 = "cheddar";
      itemName2 = "cheddar_2";
      $(".cheddar_quantity").text(1 + parseInt(document.getElementsByClassName("cheddar_quantity")[0].innerHTML));
    }else if (name == "Galbani Mozzarella"){
      itemName1 = "mozzarella";
      itemName2 = "mozzarella_2";
      $(".mozzarella_quantity").text(1 + parseInt(document.getElementsByClassName("mozzarella_quantity")[0].innerHTML));
    }else if (name == "Greek Yogurt"){
      itemName1 = "greek_yogurt";
      itemName2 = "greek_yogurt_2";
      $(".greek_yogurt_quantity").text(1 + parseInt(document.getElementsByClassName("greek_yogurt_quantity")[0].innerHTML));
    }else if (name == "Activia Strawberry"){
      itemName1 = "activia";
      itemName2 = "activia_2";
      $(".activia_quantity").text(1 + parseInt(document.getElementsByClassName("activia_quantity")[0].innerHTML));
    }else if (name == "Müller Corner"){
      itemName1 = "muller";
      itemName2 = "muller_2";
      $(".muller_quantity").text(1 + parseInt(document.getElementsByClassName("muller_quantity")[0].innerHTML));
    }else if (name == "Apple"){
      itemName1 = "apple";
      itemName2 = "apple_2";
      $(".apple_quantity").text(1 + parseInt(document.getElementsByClassName("apple_quantity")[0].innerHTML));
    }else if (name == "Banana"){
      itemName1 = "banana";
      itemName2 = "banana_2";
      $(".banana_quantity").text(1 + parseInt(document.getElementsByClassName("banana_quantity")[0].innerHTML));
    }else if (name == "Orange"){
      itemName1 = "orange";
      itemName2 = "orange_2";
      $(".orange_quantity").text(1 + parseInt(document.getElementsByClassName("orange_quantity")[0].innerHTML));
    }else if (name == "Cucumber"){
      itemName1 = "cucumber";
      itemName2 = "cucumber_2";
      $(".cucumber_quantity").text(1 + parseInt(document.getElementsByClassName("cucumber_quantity")[0].innerHTML));
    }else if (name == "Carrots"){
      itemName1 = "carrots";
      itemName2 = "carrots_2";
      $(".carrots_quantity").text(1 + parseInt(document.getElementsByClassName("carrots_quantity")[0].innerHTML));
    }else if (name == "Brocolli"){
      itemName1 = "broccoli";
      itemName2 = "broccoli_2";
      $(".broccoli_quantity").text(1 + parseInt(document.getElementsByClassName("broccoli_quantity")[0].innerHTML));
    }else if (name == "Mushrooms"){
      itemName1 = "mushroom";
      itemName2 = "mushroom_2";
      $(".mushroom_quantity").text(1 + parseInt(document.getElementsByClassName("mushroom_quantity")[0].innerHTML));
    }else if (name == "Frozen Chips"){
      itemName1 = "chips";
      itemName2 = "chips_2";
      $(".chips_quantity").text(1 + parseInt(document.getElementsByClassName("chips_quantity")[0].innerHTML));
    }else if (name == "Yorkshire Puddings"){
      itemName1 = "york_puddings";
      itemName2 = "york_puddings_2";
      $(".york_puddings_quantity").text(1 + parseInt(document.getElementsByClassName("york_puddings_quantity")[0].innerHTML));
    }else if (name == "Margherita Pizza"){
      itemName1 = "marg_pizza";
      itemName2 = "marg_pizza_2";
      $(".marg_pizza_quantity").text(1 + parseInt(document.getElementsByClassName("marg_pizza_quantity")[0].innerHTML));
    }else if (name == "Pepperoni Pizza"){
      itemName1 = "pepp_pizza";
      itemName2 = "pepp_pizza_2";
      $(".pepp_pizza_quantity").text(1 + parseInt(document.getElementsByClassName("pepp_pizza_quantity")[0].innerHTML));
    }else if (name == "Fish Fingers"){
      itemName1 = "fish_fingers";
      itemName2 = "fish_fingers_2";
      $(".fish_fingers_quantity").text(1 + parseInt(document.getElementsByClassName("fish_fingers_quantity")[0].innerHTML));
    }else if (name == "Frozen Peas"){
      itemName1 = "peas";
      itemName2 = "peas_2";
      $(".peas_quantity").text(1 + parseInt(document.getElementsByClassName("peas_quantity")[0].innerHTML));
    }else if (name == "Ben and Jerry's Ice Cream"){
      itemName1 = "ice_cream";
      itemName2 = "ice_cream_2";
      $(".ice_cream_quantity").text(1 + parseInt(document.getElementsByClassName("ice_cream_quantity")[0].innerHTML));
    }
    itemPrice1 = document.getElementsByClassName(itemName1)[0].innerHTML;
    itemPrice2 = document.getElementsByClassName(itemName2)[0].innerHTML;
    addProduct(name, itemPrice1, itemPrice2); //Adds the product to the list of increases its total if present
    var data_string = JSON.stringify(data);
    localStorage.setItem("cart", data_string);
    var cartItems = parseInt($('.totalCount').text(), 10);
    localStorage.setItem("totalItems", cartItems+1);
    $(".totalCount").text(localStorage.getItem('totalItems'));
  });

    // Gets the name and the price of the item and subtracts it from the cart as well as updates local storage with it too
  $( ".action-sub" ).click(function(event, source) {
      present = false;
    var name = $(this).attr("name_data");
    subProduct(name); //Adds the product to the list of increases its total if present
    var data_string = JSON.stringify(data);
    localStorage.setItem("cart", data_string);
    var cartItems = parseInt($('.totalCount').text(), 10);
    if(present === true){
        localStorage.setItem("totalItems", cartItems-1); //Will subtract the cart total only if the item is present

        if(name == "Skimmed Milk 2.2L"){
          $(".skimmed_milk_2_quantity").text(parseInt(document.getElementsByClassName("skimmed_milk_2_quantity")[0].innerHTML - 1));
        }else if (name == "Semi Milk Skimmed 2.2L"){
          $(".semi_skimmed_milk_2_quantity").text(parseInt(document.getElementsByClassName("semi_skimmed_milk_2_quantity")[0].innerHTML - 1));
        }else if (name == "Whole Milk 2.2L"){
          $(".whole_milk_2_quantity").text(parseInt(document.getElementsByClassName("whole_milk_2_quantity")[0].innerHTML - 1));
        }else if (name == "Gouda 10 Slices"){
          $(".gouda_quantity").text(parseInt(document.getElementsByClassName("gouda_quantity")[0].innerHTML - 1));
        }else if (name == "Philadelphia Original"){
          $(".philadelphia_quantity").text(parseInt(document.getElementsByClassName("philadelphia_quantity")[0].innerHTML - 1));
        }else if (name == "Cheddar Mature"){
          $(".cheddar_quantity").text(parseInt(document.getElementsByClassName("cheddar_quantity")[0].innerHTML - 1));
        }else if (name == "Galbani Mozzarella"){
          $(".mozzarella_quantity").text(parseInt(document.getElementsByClassName("mozzarella_quantity")[0].innerHTML - 1));
        }else if (name == "Greek Yogurt"){
          $(".greek_yogurt_quantity").text(parseInt(document.getElementsByClassName("greek_yogurt_quantity")[0].innerHTML - 1));
        }else if (name == "Activia Strawberry"){
          $(".activia_quantity").text(parseInt(document.getElementsByClassName("activia_quantity")[0].innerHTML - 1));
        }else if (name == "Müller Corner"){
          $(".muller_quantity").text(parseInt(document.getElementsByClassName("muller_quantity")[0].innerHTML - 1));
        }else if (name == "Apple"){
          $(".apple_quantity").text(parseInt(document.getElementsByClassName("apple_quantity")[0].innerHTML - 1));
        }else if (name == "Banana"){
          $(".banana_quantity").text(parseInt(document.getElementsByClassName("banana_quantity")[0].innerHTML - 1));
        }else if (name == "Orange"){
          $(".orange_quantity").text(parseInt(document.getElementsByClassName("orange_quantity")[0].innerHTML - 1));
        }else if (name == "Cucumber"){
          $(".cucumber_quantity").text(parseInt(document.getElementsByClassName("cucumber_quantity")[0].innerHTML - 1));
        }else if (name == "Carrots"){
          $(".carrots_quantity").text(parseInt(document.getElementsByClassName("carrots_quantity")[0].innerHTML - 1));
        }else if (name == "Brocolli"){
          $(".broccoli_quantity").text(parseInt(document.getElementsByClassName("broccoli_quantity")[0].innerHTML - 1));
        }else if (name == "Mushrooms"){
          $(".mushroom_quantity").text(parseInt(document.getElementsByClassName("mushroom_quantity")[0].innerHTML - 1));
        }else if (name == "Frozen Chips"){
          $(".chips_quantity").text(parseInt(document.getElementsByClassName("chips_quantity")[0].innerHTML - 1));
        }else if (name == "Yorkshire Puddings"){
          $(".york_puddings_quantity").text(parseInt(document.getElementsByClassName("york_puddings_quantity")[0].innerHTML - 1));
        }else if (name == "Margherita Pizza"){
          $(".marg_pizza_quantity").text(parseInt(document.getElementsByClassName("marg_pizza_quantity")[0].innerHTML - 1));
        }else if (name == "Pepperoni Pizza"){
          $(".pepp_pizza_quantity").text(parseInt(document.getElementsByClassName("pepp_pizza_quantity")[0].innerHTML - 1));
        }else if (name == "Fish Fingers"){
          $(".fish_fingers_quantity").text(parseInt(document.getElementsByClassName("fish_fingers_quantity")[0].innerHTML - 1));
        }else if (name == "Frozen Peas"){
          $(".peas_quantity").text(parseInt(document.getElementsByClassName("peas_quantity")[0].innerHTML - 1));
        }else if (name == "Ben and Jerry's Ice Cream"){
          $(".ice_cream_quantity").text(parseInt(document.getElementsByClassName("ice_cream_quantity")[0].innerHTML - 1));
        }
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
function addProduct(name, itemPriceOne, itemPriceTwo){
  'use strict';
  function add(){
    for(var i=0; i<data.total; i++){
      var row = data.rows[i];
      if (row.name === name){
        // If the name is the same of the product, add one to the quantity instead of adding another product
        row.quantity += 1;
        present = true;
        return;
      }
    }
    // Add one to total and push the changes to the data
    data.total += 1;
    data.rows.push({
      name:name,
      price1:itemPriceOne,
      price2:itemPriceTwo,
      quantity:1
    });
  }
  add();
}

function subProduct(name){
  'use strict';
  function sub(){
    for(var i=0; i<data.total; i++){
      var row = data.rows[i];
      if (row.name === name){
        row.quantity -= 1;
        present = true;
      }
        if(row.quantity < 1){
            data.rows.pop(row);
            data.total -=1;
        }
    }
  }
  sub();
  }
