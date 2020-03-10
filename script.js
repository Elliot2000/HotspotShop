
function codeAddress() {
  var tabUnder = document.getElementsByClassName("tabUnder");
  for (i = 0; i < tabUnder.length; i++) {
    tabUnder[i].style.backgroundColor = "#91b8c9";
  }
  tabUnder[0].style.backgroundColor = "#5a879e";
  document.getElementById("Dairy").style.display = "block";
  document.getElementById("Dairy").className += " active";
 }

window.onload = codeAddress;

function openTab(evt, tabName, tabNameUnder) {
  // Declare all variables
  var i, tabcontent, tablinks, tabUnder, tabUnderdiv;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("itemContainer");
  tabUnder = document.getElementsByClassName("tabUnder");
  for (i = 0; i < tabUnder.length; i++) {
    tabUnder[i].style.backgroundColor = "#91b8c9";
  }

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementById(tabNameUnder).style.backgroundColor = "#5a879e";
}
