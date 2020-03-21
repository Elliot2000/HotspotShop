$(document).ready(function() {

  var url = "https://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.waitrose.com/ecom/products/essential-waitrose-semi-skimmed-milk/053457-26759-26760" + "&callback=?");
  $.getJSON(url, function(response)
    {
      console.log(response);
    }
  );

});
