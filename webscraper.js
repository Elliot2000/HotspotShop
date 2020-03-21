var url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/essential-waitrose-semi-skimmed-milk/053457-26759-26760" + "&callback=?");
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

$(document).ready(function() {

  $.ajax(settings).done(function (response) {
      urlObject = JSON.stringify(response);
      console.log(response);
      //alert(urlObject.match(/<span data-test="product-pod-price">\[ ([\d]*?) \]<\/span>/)[1]);
  });



});
