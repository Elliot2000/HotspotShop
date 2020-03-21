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
var urlObject;
var numberID;
var price;

$(document).ready(function() {

  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      numberID = urlObject.search('<span>£');
      price = urlObject[numberID+6] + urlObject[numberID+7] + urlObject[numberID+8] + urlObject[numberID+9] + urlObject[numberID+10];
      if(price != "tents"){
        $(".skimmed_milk_2").text(price);
      }else{
            $( ".overlay2" ).fadeIn( "slow",
            function() {
              $( ".overlay2" ).delay(5000).fadeOut("slow");
            });
      }

  });
});



$( ".close" ).click(function(event) {
  event.preventDefault();
  $( ".overlay2" ).hide();
});
