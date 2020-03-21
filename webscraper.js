var url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/essential-waitrose-semi-skimmed-milk/053457-26759-26760");
var settings = {
          'cache': false,
          'dataType': "jsonp",
          "async": true,
          "crossDomain": true,
          "url": url,
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
