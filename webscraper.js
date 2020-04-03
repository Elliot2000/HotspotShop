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
      wa_skimmed_milk_2_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["skimmed_milk_2_url"]);
      $(".semi_skimmed_milk_2").text("£" + response["WAITROSE"]["semi_skimmed_milk_2"]);
      wa_semi_skimmed_milk_2_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["semi_skimmed_milk_2_url"]);
      $(".whole_milk_2").text("£" + response["WAITROSE"]["whole_milk_2"]);
      wa_whole_milk_2_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["whole_milk_2_url"]);
      $(".gouda").text("£" + response["WAITROSE"]["gouda"]);
      wa_gouda_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["gouda_url"]);
      $(".philadelphia").text("£" + response["WAITROSE"]["philadelphia"]);
      wa_philadelphia_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["philadelphia_url"]);
      $(".cheddar").text("£" + response["WAITROSE"]["cheddar"]);
      wa_cheddar_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["cheddar_url"]);
      $(".mozzarella").text("£" + response["WAITROSE"]["mozzarella"]);
      wa_mozzarella_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["mozzarella_url"]);
      $(".greek_yogurt").text("£" + response["WAITROSE"]["greek_yogurt"]);
      wa_greek_yogurt_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["greek_yogurt_url"]);
      $(".activia").text("£" + response["WAITROSE"]["activia"]);
      wa_activia_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["activia_url"]);
      $(".muller").text("£" + response["WAITROSE"]["muller"]);
      wa_muller_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["muller_url"]);
      $(".apple").text("£" + response["WAITROSE"]["apple"]);
      wa_apple_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["apple_url"]);
      $(".banana").text("£" + response["WAITROSE"]["banana"]);
      wa_banana_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["banana_url"]);
      $(".orange").text("£" + response["WAITROSE"]["orange"]);
      wa_orange_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["orange_url"]);
      $(".cucumber").text("£" + response["WAITROSE"]["cucumber"]);
      wa_cucumber_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["cucumber_url"]);
      $(".carrots").text("£" + response["WAITROSE"]["carrots"]);
      wa_carrots_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["carrots_url"]);
      $(".broccoli").text("£" + response["WAITROSE"]["broccoli"]);
      wa_broccoli_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["broccoli_url"]);
      $(".mushroom").text("£" + response["WAITROSE"]["mushroom"]);
      wa_mushroom_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["mushroom_url"]);
      $(".chips").text("£" + response["WAITROSE"]["chips"]);
      wa_chips_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["chips_url"]);
      $(".york_puddings").text("£" + response["WAITROSE"]["york_puddings"]);
      wa_york_puddings_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["york_puddings_url"]);
      $(".marg_pizza").text("£" + response["WAITROSE"]["marg_pizza"]);
      wa_marg_pizza_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["marg_pizza_url"]);
      $(".pepp_pizza").text("£" + response["WAITROSE"]["pepp_pizza"]);
      wa_pepp_pizza_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["pepp_pizza_url"]);
      $(".fish_fingers").text("£" + response["WAITROSE"]["fish_fingers"]);
      wa_fish_fingers_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["fish_fingers_url"]);
      $(".peas").text("£" + response["WAITROSE"]["peas"]);
      wa_peas_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["peas_url"]);
      $(".ice_cream").text("£" + response["WAITROSE"]["ice_cream"]);
      wa_ice_cream_url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent(response["WAITROSE"]["ice_cream_url"]);






      $(".skimmed_milk_2_2").text("£" + response["ASDA"]["skimmed_milk_2"]);
      as_skimmed_milk_2_url = response["ASDA"]["skimmed_milk_2_url"];
      $(".semi_skimmed_milk_2_2").text("£" + response["ASDA"]["semi_skimmed_milk_2"]);
      as_semi_skimmed_milk_2_url = response["ASDA"]["semi_skimmed_milk_2_url"];
      $(".whole_milk_2_2").text("£" + response["ASDA"]["whole_milk_2"]);
      as_whole_milk_2_url = response["ASDA"]["ice_cream_url"];
      $(".gouda_2").text("£" + response["ASDA"]["gouda"]);
      as_gouda_url = response["ASDA"]["gouda_url"];
      $(".philadelphia_2").text("£" + response["ASDA"]["philadelphia"]);
      as_philadelphia_url = response["ASDA"]["philadelphia_url"];
      $(".cheddar_2").text("£" + response["ASDA"]["cheddar"]);
      as_cheddar_url = response["ASDA"]["cheddar_url"];
      $(".mozzarella_2").text("£" + response["ASDA"]["mozzarella"]);
      as_mozzarella_url = response["ASDA"]["mozzarella_url"];
      $(".greek_yogurt_2").text("£" + response["ASDA"]["greek_yogurt"]);
      as_greek_yogurt_url = response["ASDA"]["greek_yogurt_url"];
      $(".activia_2").text("£" + response["ASDA"]["activia"]);
      as_activia_url = response["ASDA"]["activia_url"];
      $(".muller_2").text("£" + response["ASDA"]["muller"]);
      as_muller_url = response["ASDA"]["muller_url"];
      $(".apple_2").text("£" + response["ASDA"]["apple"]);
      as_apple_url = response["ASDA"]["apple_url"];
      $(".banana_2").text("£" + response["ASDA"]["banana"]);
      as_banana_url = response["ASDA"]["banana_url"];
      $(".orange_2").text("£" + response["ASDA"]["orange"]);
      as_orange_url = response["ASDA"]["orange_url"];
      $(".cucumber_2").text("£" + response["ASDA"]["cucumber"]);
      as_cucumber_url = response["ASDA"]["cucumber_url"];
      $(".carrots_2").text("£" + response["ASDA"]["carrots"]);
      as_carrots_url = response["ASDA"]["carrots_url"];
      $(".broccoli_2").text("£" + response["ASDA"]["broccoli"]);
      as_broccoli_url = response["ASDA"]["broccoli_url"];
      $(".mushroom_2").text("£" + response["ASDA"]["mushroom"]);
      as_mushroom_url = response["ASDA"]["mushroom_url"];
      $(".chips_2").text("£" + response["ASDA"]["chips"]);
      as_chips_url = response["ASDA"]["chips_url"];
      $(".york_puddings_2").text("£" + response["ASDA"]["york_puddings"]);
      as_york_puddings_url = response["ASDA"]["york_puddings_url"];
      $(".marg_pizza_2").text("£" + response["ASDA"]["marg_pizza"]);
      as_marg_pizza_url = response["ASDA"]["marg_pizza_url"];
      $(".pepp_pizza_2").text("£" + response["ASDA"]["pepp_pizza"]);
      as_pepp_pizza_url = response["ASDA"]["pepp_pizza_url"];
      $(".fish_fingers_2").text("£" + response["ASDA"]["fish_fingers"]);
      as_fish_fingers_url = response["ASDA"]["fish_fingers_url"];
      $(".peas_2").text("£" + response["ASDA"]["peas"]);
      as_peas_url = response["ASDA"]["peas_url"];
      $(".ice_cream_2").text("£" + response["ASDA"]["ice_cream"]);
      as_ice_cream_url = response["ASDA"]["ice_cream_url"];

  });

  update();
});


function update(){
  $( ".overlay3" ).fadeIn( "slow");
  var pricenum1, pricenum2;
  var error = false;


  var settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_skimmed_milk_2_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  var settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_skimmed_milk_2_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["skimmed_milk_2"]);
        pricenum2 = parseFloat(response["ASDA"]["skimmed_milk_2"]);


      if(pricenum1 > pricenum2){
        $(".skimmed_milk_2").text("£" + response["ASDA"]["skimmed_milk_2"]);
        $(".skimmed_milk_2_2").text("£" + response["WAITROSE"]["skimmed_milk_2"]);
      }else{
        $(".skimmed_milk_2_2").text("£" + response["ASDA"]["skimmed_milk_2"]);
        $(".skimmed_milk_2").text("£" + response["WAITROSE"]["skimmed_milk_2"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".skimmed_milk_2").text("£" + pricenum1);
      $(".skimmed_milk_2_2").text("£" + pricenum2);
    }else{
      $(".skimmed_milk_2_2").text("£" + pricenum1);
      $(".skimmed_milk_2").text("£" + pricenum2);
    }
  }

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_semi_skimmed_milk_2_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_semi_skimmed_milk_2_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["semi_skimmed_milk_2"]);
        pricenum2 = parseFloat(response["ASDA"]["semi_skimmed_milk_2"]);


      if(pricenum1 > pricenum2){
        $(".semi_skimmed_milk_2").text("£" + response["ASDA"]["semi_skimmed_milk_2"]);
        $(".semi_skimmed_milk_2_2").text("£" + response["WAITROSE"]["semi_skimmed_milk_2"]);
      }else{
        $(".semi_skimmed_milk_2_2").text("£" + response["ASDA"]["semi_skimmed_milk_2"]);
        $(".semi_skimmed_milk_2").text("£" + response["WAITROSE"]["semi_skimmed_milk_2"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".semi_skimmed_milk_2").text("£" + pricenum1);
      $(".semi_skimmed_milk_2_2").text("£" + pricenum2);
    }else{
      $(".semi_skimmed_milk_2_2").text("£" + pricenum1);
      $(".semi_skimmed_milk_2").text("£" + pricenum2);
    }
  }


  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_whole_milk_2_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_whole_milk_2_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["whole_milk_2"]);
        pricenum2 = parseFloat(response["ASDA"]["whole_milk_2"]);


      if(pricenum1 > pricenum2){
        $(".whole_milk_2").text("£" + response["ASDA"]["whole_milk_2"]);
        $(".whole_milk_2_2").text("£" + response["WAITROSE"]["whole_milk_2"]);
      }else{
        $(".whole_milk_2_2").text("£" + response["ASDA"]["whole_milk_2"]);
        $(".whole_milk_2").text("£" + response["WAITROSE"]["whole_milk_2"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".whole_milk_2").text("£" + pricenum1);
      $(".whole_milk_2_2").text("£" + pricenum2);
    }else{
      $(".whole_milk_2_2").text("£" + pricenum1);
      $(".whole_milk_2").text("£" + pricenum2);
    }
  }

  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_gouda_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_gouda_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["gouda"]);
        pricenum2 = parseFloat(response["ASDA"]["gouda"]);


      if(pricenum1 > pricenum2){
        $(".gouda").text("£" + response["ASDA"]["gouda"]);
        $(".gouda_2").text("£" + response["WAITROSE"]["gouda"]);
      }else{
        $(".gouda_2").text("£" + response["ASDA"]["gouda"]);
        $(".gouda").text("£" + response["WAITROSE"]["gouda"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".gouda").text("£" + pricenum1);
      $(".gouda_2").text("£" + pricenum2);
    }else{
      $(".gouda_2").text("£" + pricenum1);
      $(".gouda").text("£" + pricenum2);
    }
  }



  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_philadelphia_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_philadelphia_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["philadelphia"]);
        pricenum2 = parseFloat(response["ASDA"]["philadelphia"]);


      if(pricenum1 > pricenum2){
        $(".philadelphia").text("£" + response["ASDA"]["philadelphia"]);
        $(".philadelphia_2").text("£" + response["WAITROSE"]["philadelphia"]);
      }else{
        $(".philadelphia_2").text("£" + response["ASDA"]["philadelphia"]);
        $(".philadelphia").text("£" + response["WAITROSE"]["philadelphia"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".philadelphia").text("£" + pricenum1);
      $(".philadelphia_2").text("£" + pricenum2);
    }else{
      $(".philadelphia_2").text("£" + pricenum1);
      $(".philadelphia").text("£" + pricenum2);
    }
  }


  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_cheddar_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_cheddar_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["cheddar"]);
        pricenum2 = parseFloat(response["ASDA"]["cheddar"]);


      if(pricenum1 > pricenum2){
        $(".cheddar").text("£" + response["ASDA"]["cheddar"]);
        $(".cheddar_2").text("£" + response["WAITROSE"]["cheddar"]);
      }else{
        $(".cheddar_2").text("£" + response["ASDA"]["cheddar"]);
        $(".cheddar").text("£" + response["WAITROSE"]["cheddar"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".cheddar").text("£" + pricenum1);
      $(".cheddar_2").text("£" + pricenum2);
    }else{
      $(".cheddar_2").text("£" + pricenum1);
      $(".cheddar").text("£" + pricenum2);
    }
  }



  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_mozzarella_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_mozzarella_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["mozzarella"]);
        pricenum2 = parseFloat(response["ASDA"]["mozzarella"]);


      if(pricenum1 > pricenum2){
        $(".mozzarella").text("£" + response["ASDA"]["mozzarella"]);
        $(".mozzarella_2").text("£" + response["WAITROSE"]["mozzarella"]);
      }else{
        $(".mozzarella_2").text("£" + response["ASDA"]["mozzarella"]);
        $(".mozzarella").text("£" + response["WAITROSE"]["mozzarella"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".mozzarella").text("£" + pricenum1);
      $(".mozzarella_2").text("£" + pricenum2);
    }else{
      $(".mozzarella_2").text("£" + pricenum1);
      $(".mozzarella").text("£" + pricenum2);
    }
  }


  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_greek_yogurt_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_greek_yogurt_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["greek_yogurt"]);
        pricenum2 = parseFloat(response["ASDA"]["greek_yogurt"]);


      if(pricenum1 > pricenum2){
        $(".greek_yogurt").text("£" + response["ASDA"]["greek_yogurt"]);
        $(".greek_yogurt_2").text("£" + response["WAITROSE"]["greek_yogurt"]);
      }else{
        $(".greek_yogurt_2").text("£" + response["ASDA"]["greek_yogurt"]);
        $(".greek_yogurt").text("£" + response["WAITROSE"]["greek_yogurt"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".greek_yogurt").text("£" + pricenum1);
      $(".greek_yogurt_2").text("£" + pricenum2);
    }else{
      $(".greek_yogurt_2").text("£" + pricenum1);
      $(".greek_yogurt").text("£" + pricenum2);
    }
  }


  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_activia_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_activia_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["activia"]);
        pricenum2 = parseFloat(response["ASDA"]["activia"]);


      if(pricenum1 > pricenum2){
        $(".activia").text("£" + response["ASDA"]["activia"]);
        $(".activia_2").text("£" + response["WAITROSE"]["activia"]);
      }else{
        $(".activia_2").text("£" + response["ASDA"]["activia"]);
        $(".activia").text("£" + response["WAITROSE"]["activia"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".activia").text("£" + pricenum1);
      $(".activia_2").text("£" + pricenum2);
    }else{
      $(".activia_2").text("£" + pricenum1);
      $(".activia").text("£" + pricenum2);
    }
  }



    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_muller_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_muller_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["muller"]);
          pricenum2 = parseFloat(response["ASDA"]["muller"]);


        if(pricenum1 > pricenum2){
          $(".muller").text("£" + response["ASDA"]["muller"]);
          $(".muller_2").text("£" + response["WAITROSE"]["muller"]);
        }else{
          $(".muller_2").text("£" + response["ASDA"]["muller"]);
          $(".muller").text("£" + response["WAITROSE"]["muller"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".muller").text("£" + pricenum1);
        $(".muller_2").text("£" + pricenum2);
      }else{
        $(".muller_2").text("£" + pricenum1);
        $(".muller").text("£" + pricenum2);
      }
    }




    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_apple_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_apple_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["apple"]);
          pricenum2 = parseFloat(response["ASDA"]["apple"]);


        if(pricenum1 > pricenum2){
          $(".apple").text("£" + response["ASDA"]["apple"]);
          $(".apple_2").text("£" + response["WAITROSE"]["apple"]);
        }else{
          $(".apple_2").text("£" + response["ASDA"]["apple"]);
          $(".apple").text("£" + response["WAITROSE"]["apple"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".apple").text("£" + pricenum1);
        $(".apple_2").text("£" + pricenum2);
      }else{
        $(".apple_2").text("£" + pricenum1);
        $(".apple").text("£" + pricenum2);
      }
    }



  settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": as_banana_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  settings2 = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": wa_banana_url,
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
  }

  $.ajax(settings).done(function (response) {
      alert(response);
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('pdp-main-details__price">£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      try{
        var pricenum1 = parseFloat(price)
      }catch(e){
        error = true;
      }
  });

  $.ajax(settings2).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        try{
          var pricenum2 = parseFloat(price)
        }catch(e){
          error = true;
        }
      }else{
        error = true;
      }
  });

  if(error == true){
      settings = {
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
        pricenum1 = parseFloat(response["WAITROSE"]["banana"]);
        pricenum2 = parseFloat(response["ASDA"]["banana"]);


      if(pricenum1 > pricenum2){
        $(".banana").text("£" + response["ASDA"]["banana"]);
        $(".banana_2").text("£" + response["WAITROSE"]["banana"]);
      }else{
        $(".banana_2").text("£" + response["ASDA"]["banana"]);
        $(".banana").text("£" + response["WAITROSE"]["banana"]);
      }

      });
      error = false;
  }else{
    if(pricenum1 > pricenum2){
      $(".banana").text("£" + pricenum1);
      $(".banana_2").text("£" + pricenum2);
    }else{
      $(".banana_2").text("£" + pricenum1);
      $(".banana").text("£" + pricenum2);
    }
  }




    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_orange_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_orange_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["orange"]);
          pricenum2 = parseFloat(response["ASDA"]["orange"]);


        if(pricenum1 > pricenum2){
          $(".orange").text("£" + response["ASDA"]["orange"]);
          $(".orange_2").text("£" + response["WAITROSE"]["orange"]);
        }else{
          $(".orange_2").text("£" + response["ASDA"]["orange"]);
          $(".orange").text("£" + response["WAITROSE"]["orange"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".orange").text("£" + pricenum1);
        $(".orange_2").text("£" + pricenum2);
      }else{
        $(".orange_2").text("£" + pricenum1);
        $(".orange").text("£" + pricenum2);
      }
    }



    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_cucumber_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_cucumber_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["cucumber"]);
          pricenum2 = parseFloat(response["ASDA"]["cucumber"]);


        if(pricenum1 > pricenum2){
          $(".cucumber").text("£" + response["ASDA"]["cucumber"]);
          $(".cucumber_2").text("£" + response["WAITROSE"]["cucumber"]);
        }else{
          $(".cucumber_2").text("£" + response["ASDA"]["cucumber"]);
          $(".cucumber").text("£" + response["WAITROSE"]["cucumber"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".cucumber").text("£" + pricenum1);
        $(".cucumber_2").text("£" + pricenum2);
      }else{
        $(".cucumber_2").text("£" + pricenum1);
        $(".cucumber").text("£" + pricenum2);
      }
    }




    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_carrots_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_carrots_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["carrots"]);
          pricenum2 = parseFloat(response["ASDA"]["carrots"]);


        if(pricenum1 > pricenum2){
          $(".carrots").text("£" + response["ASDA"]["carrots"]);
          $(".carrots_2").text("£" + response["WAITROSE"]["carrots"]);
        }else{
          $(".carrots_2").text("£" + response["ASDA"]["carrots"]);
          $(".carrots").text("£" + response["WAITROSE"]["carrots"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".carrots").text("£" + pricenum1);
        $(".carrots_2").text("£" + pricenum2);
      }else{
        $(".carrots_2").text("£" + pricenum1);
        $(".carrots").text("£" + pricenum2);
      }
    }

    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_broccoli_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_broccoli_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["broccoli"]);
          pricenum2 = parseFloat(response["ASDA"]["broccoli"]);


        if(pricenum1 > pricenum2){
          $(".broccoli").text("£" + response["ASDA"]["broccoli"]);
          $(".broccoli_2").text("£" + response["WAITROSE"]["broccoli"]);
        }else{
          $(".broccoli_2").text("£" + response["ASDA"]["broccoli"]);
          $(".broccoli").text("£" + response["WAITROSE"]["broccoli"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".broccoli").text("£" + pricenum1);
        $(".broccoli_2").text("£" + pricenum2);
      }else{
        $(".broccoli_2").text("£" + pricenum1);
        $(".broccoli").text("£" + pricenum2);
      }
    }

    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_mushroom_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_mushroom_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["mushroom"]);
          pricenum2 = parseFloat(response["ASDA"]["mushroom"]);


        if(pricenum1 > pricenum2){
          $(".mushroom").text("£" + response["ASDA"]["mushroom"]);
          $(".mushroom_2").text("£" + response["WAITROSE"]["mushroom"]);
        }else{
          $(".mushroom_2").text("£" + response["ASDA"]["mushroom"]);
          $(".mushroom").text("£" + response["WAITROSE"]["mushroom"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".mushroom").text("£" + pricenum1);
        $(".mushroom_2").text("£" + pricenum2);
      }else{
        $(".mushroom_2").text("£" + pricenum1);
        $(".mushroom").text("£" + pricenum2);
      }
    }

    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_chips_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_chips_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["chips"]);
          pricenum2 = parseFloat(response["ASDA"]["chips"]);


        if(pricenum1 > pricenum2){
          $(".chips").text("£" + response["ASDA"]["chips"]);
          $(".chips_2").text("£" + response["WAITROSE"]["chips"]);
        }else{
          $(".chips_2").text("£" + response["ASDA"]["chips"]);
          $(".chips").text("£" + response["WAITROSE"]["chips"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".chips").text("£" + pricenum1);
        $(".chips_2").text("£" + pricenum2);
      }else{
        $(".chips_2").text("£" + pricenum1);
        $(".chips").text("£" + pricenum2);
      }
    }

    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_york_puddings_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_york_puddings_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["york_puddings"]);
          pricenum2 = parseFloat(response["ASDA"]["york_puddings"]);


        if(pricenum1 > pricenum2){
          $(".york_puddings").text("£" + response["ASDA"]["york_puddings"]);
          $(".york_puddings_2").text("£" + response["WAITROSE"]["york_puddings"]);
        }else{
          $(".york_puddings_2").text("£" + response["ASDA"]["york_puddings"]);
          $(".york_puddings").text("£" + response["WAITROSE"]["york_puddings"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".york_puddings").text("£" + pricenum1);
        $(".york_puddings_2").text("£" + pricenum2);
      }else{
        $(".york_puddings_2").text("£" + pricenum1);
        $(".york_puddings").text("£" + pricenum2);
      }
    }


    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_marg_pizza_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_marg_pizza_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["marg_pizza"]);
          pricenum2 = parseFloat(response["ASDA"]["marg_pizza"]);


        if(pricenum1 > pricenum2){
          $(".marg_pizza").text("£" + response["ASDA"]["marg_pizza"]);
          $(".marg_pizza_2").text("£" + response["WAITROSE"]["marg_pizza"]);
        }else{
          $(".marg_pizza_2").text("£" + response["ASDA"]["marg_pizza"]);
          $(".marg_pizza").text("£" + response["WAITROSE"]["marg_pizza"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".marg_pizza").text("£" + pricenum1);
        $(".marg_pizza_2").text("£" + pricenum2);
      }else{
        $(".marg_pizza_2").text("£" + pricenum1);
        $(".marg_pizza").text("£" + pricenum2);
      }
    }


    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_pepp_pizza_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_pepp_pizza_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["pepp_pizza"]);
          pricenum2 = parseFloat(response["ASDA"]["pepp_pizza"]);


        if(pricenum1 > pricenum2){
          $(".pepp_pizza").text("£" + response["ASDA"]["pepp_pizza"]);
          $(".pepp_pizza_2").text("£" + response["WAITROSE"]["pepp_pizza"]);
        }else{
          $(".pepp_pizza_2").text("£" + response["ASDA"]["pepp_pizza"]);
          $(".pepp_pizza").text("£" + response["WAITROSE"]["pepp_pizza"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".pepp_pizza").text("£" + pricenum1);
        $(".pepp_pizza_2").text("£" + pricenum2);
      }else{
        $(".pepp_pizza_2").text("£" + pricenum1);
        $(".pepp_pizza").text("£" + pricenum2);
      }
    }

    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_fish_fingers_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_fish_fingers_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["fish_fingers"]);
          pricenum2 = parseFloat(response["ASDA"]["fish_fingers"]);


        if(pricenum1 > pricenum2){
          $(".fish_fingers").text("£" + response["ASDA"]["fish_fingers"]);
          $(".fish_fingers_2").text("£" + response["WAITROSE"]["fish_fingers"]);
        }else{
          $(".fish_fingers_2").text("£" + response["ASDA"]["fish_fingers"]);
          $(".fish_fingers").text("£" + response["WAITROSE"]["fish_fingers"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".fish_fingers").text("£" + pricenum1);
        $(".fish_fingers_2").text("£" + pricenum2);
      }else{
        $(".fish_fingers_2").text("£" + pricenum1);
        $(".fish_fingers").text("£" + pricenum2);
      }
    }

    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_peas_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_peas_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["peas"]);
          pricenum2 = parseFloat(response["ASDA"]["peas"]);


        if(pricenum1 > pricenum2){
          $(".peas").text("£" + response["ASDA"]["peas"]);
          $(".peas_2").text("£" + response["WAITROSE"]["peas"]);
        }else{
          $(".peas_2").text("£" + response["ASDA"]["peas"]);
          $(".peas").text("£" + response["WAITROSE"]["peas"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".peas").text("£" + pricenum1);
        $(".peas_2").text("£" + pricenum2);
      }else{
        $(".peas_2").text("£" + pricenum1);
        $(".peas").text("£" + pricenum2);
      }
    }

    settings = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": as_ice_cream_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    settings2 = {
              'cache': false,
              'dataType': "jsonp",
              "async": true,
              "crossDomain": true,
              "url": wa_ice_cream_url,
              "method": "GET",
              "headers": {
                  "accept": "application/json",
                  "Access-Control-Allow-Origin":"*"
              }
    }

    $.ajax(settings).done(function (response) {
        alert(response);
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('pdp-main-details__price">£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        try{
          var pricenum1 = parseFloat(price)
        }catch(e){
          error = true;
        }
    });

    $.ajax(settings2).done(function (response) {
        urlObject = JSON.stringify(response);
        numberID = urlObject.search('<span>£');
        price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
        if(price != "tents"){
          try{
            var pricenum2 = parseFloat(price)
          }catch(e){
            error = true;
          }
        }else{
          error = true;
        }
    });

    if(error == true){
        settings = {
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
          pricenum1 = parseFloat(response["WAITROSE"]["ice_cream"]);
          pricenum2 = parseFloat(response["ASDA"]["ice_cream"]);


        if(pricenum1 > pricenum2){
          $(".ice_cream").text("£" + response["ASDA"]["ice_cream"]);
          $(".ice_cream_2").text("£" + response["WAITROSE"]["ice_cream"]);
        }else{
          $(".ice_cream_2").text("£" + response["ASDA"]["ice_cream"]);
          $(".ice_cream").text("£" + response["WAITROSE"]["ice_cream"]);
        }

        });
        error = false;
    }else{
      if(pricenum1 > pricenum2){
        $(".ice_cream").text("£" + pricenum1);
        $(".ice_cream_2").text("£" + pricenum2);
      }else{
        $(".ice_cream_2").text("£" + pricenum1);
        $(".ice_cream").text("£" + pricenum2);
      }
    }




  $( ".overlay3" ).delay(3000).fadeOut("slow");

};



$( ".close" ).click(function(event) {
  event.preventDefault();
  $( ".overlay2" ).hide();
});
