var skimmed_milk_2_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/essential-waitrose-skimmed-milk/053444-26741-26742");
var semi_skimmed_milk_2_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/essential-waitrose-semi-skimmed-milk/053457-26759-26760");
var whole_milk_2_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/essential-waitrose-whole-milk/053404-26711-26712");
var gouda_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/essential-waitrose-sliced-dutch-gouda-10-slices-strength-2/078724-40077-40078");
var philadelphia_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/philadelphia-original/041421-20508-20509");
var cheddar_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/waitrose-somerset-cheddar-mature-strength-5/668767-451756-451757");
var mozzarella_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/galbani-mozzarella/041220-20388-20389");
var greek_yogurt_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/kri-kri-my-authentic-greek-yogurt-10/549731-653496-653497");
var activia_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/activia-strawberry/786602-690832-690833");
var muller_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/muller-corner-vanilla-chocolate-balls/053238-26611-26612");
var apple_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/braeburn-apples/088640-45525-45526");
var banana_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/fairtrade-bananas/088903-45703-45704");
var orange_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/tango-easy-peeler-mandarins/088414-45365-45366");
var cucumber_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/cucumber/086468-44158-44159");
var carrots_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/carrots/085125-43221-43222");
var broccoli_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/broccoli/085242-43323-43324");
var chips_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/aunt-bessies-crispy-homestyle-chips/042645-21098-21099");
var york_puddings_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/waitrose-frozen-12-yorkshire-puddings/694992-98677-98678");
var marg_pizza_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/waitrose-margherita-pizza/096458-49344-49345");
var pepp_pizza_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/waitrose-pepperoni-pizza/092923-47761-47762");
var fish_fingers_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/birds-eye-10-cod-fish-fingers/618561-130834-130835");
var peas_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/waitrose-duchy-petits-pois/092908-47755-47756");
var ice_cream_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/ben-jerrys-cookie-dough-ice-cream/026379-12833-12834");
var mushroom_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/cup-mushrooms/085701-372143-43723");




var urlObject;
var numberID;
var price;

$(document).ready(function() {

  var settings = {
            'cache': false,
            'dataType': "json",
            "async": true,
            "crossDomain": true,
            "url": "https://pmichal.me/HotspotShop/price_data.json",
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      $(".skimmed_milk_2").text("£" + response["WAITROSE"]["skimmed_milk_2"]);
      $(".semi_skimmed_milk_2").text("£" + response["WAITROSE"]["semi_skimmed_milk_2"]);
      $(".whole_milk_2").text("£" + response["WAITROSE"]["whole_milk_2"]);
      $(".gouda").text("£" + response["WAITROSE"]["gouda"]);
      $(".philadelphia").text("£" + response["WAITROSE"]["philadelphia"]);
      $(".cheddar").text("£" + response["WAITROSE"]["cheddar"]);
      $(".mozzarella").text("£" + response["WAITROSE"]["mozzarella"]);
      $(".greek_yogurt").text("£" + response["WAITROSE"]["greek_yogurt"]);
      $(".activia").text("£" + response["WAITROSE"]["activia"]);
      $(".muller").text("£" + response["WAITROSE"]["muller"]);
      $(".apple").text("£" + response["WAITROSE"]["apple"]);
      $(".banana").text("£" + response["WAITROSE"]["banana"]);
      $(".orange").text("£" + response["WAITROSE"]["orange"]);
      $(".cucumber").text("£" + response["WAITROSE"]["cucumber"]);
      $(".carrots").text("£" + response["WAITROSE"]["carrots"]);
      $(".broccoli").text("£" + response["WAITROSE"]["broccoli"]);
      $(".mushroom").text("£" + response["WAITROSE"]["mushroom"]);
      $(".chips").text("£" + response["WAITROSE"]["chips"]);
      $(".york_puddings").text("£" + response["WAITROSE"]["york_puddings"]);
      $(".marg_pizza").text("£" + response["WAITROSE"]["marg_pizza"]);
      $(".pepp_pizza").text("£" + response["WAITROSE"]["pepp_pizza"]);
      $(".fish_fingers").text("£" + response["WAITROSE"]["fish_fingers"]);
      $(".peas").text("£" + response["WAITROSE"]["peas"]);
      $(".ice_cream").text("£" + response["WAITROSE"]["ice_cream"]);
  });

  update();
});


function update(){
  $( ".overlay3" ).fadeIn( "slow");

  var settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": skimmed_milk_2_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".skimmed_milk_2").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": semi_skimmed_milk_2_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".semi_skimmed_milk_2").text(price);
      }
  });


  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": whole_milk_2_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".whole_milk_2").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": gouda_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".gouda").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": philadelphia_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".philadelphia").text(price);
      }
  });


  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": cheddar_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".cheddar").text(price);
      }
  });




  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": mozzarella_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".mozzarella").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": greek_yogurt_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".greek_yogurt").text(price);
      }
  });


  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": activia_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".activia").text(price);
      }
  });


  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": muller_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".muller").text(price);
      }
  });


  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": orange_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".orange").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": apple_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".apple").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": banana_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".banana").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": cucumber_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".cucumber").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": carrots_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".carrots").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": broccoli_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".broccoli").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": mushroom_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".mushroom").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": chips_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".chips").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": york_puddings_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".york_puddings").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": marg_pizza_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".marg_pizza").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": pepp_pizza_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".pepp_pizza").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": fish_fingers_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".fish_fingers").text(price);
      }
  });

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": peas_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".peas").text(price);
      }
  });
  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": ice_cream_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
    }


  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".ice_cream").text(price);
      }
  });



  $( ".overlay3" ).delay(3000).fadeOut("slow");

};



$( ".close" ).click(function(event) {
  event.preventDefault();
  $( ".overlay2" ).hide();
});
