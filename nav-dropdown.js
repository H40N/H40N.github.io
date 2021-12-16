
function dropdownFunction() {
  document.getElementById("dropdown-arkiv").classList.toggle("show-flex");

  setTimeout(() => {
    document.getElementById("dropdown-animation").classList.toggle("move");
  }, 50);

  var navBar = document.getElementById("navBar");
  var dropdownArkivEdge = document.getElementById("dropdown-arkiv").getBoundingClientRect();

  navBar.style.height = dropdownArkivEdge.bottom + "px";
  navBar.style.backgroundImage = "linear-gradient(#1D2951, #1D29519F)"

















  /*if (navBar.style.height == "auto") {
    document.getElementById("navBar").style.height = dropdownArkivEdge.bottom + "px";
  } else {
    document.getElementById("navBar").style.height = "auto";
  }
  var i;
  for (var i = 0; i < navBar.length; i++) {
    var decisions = navBar[i];
    if (!decisions.classList.contains('expand')) {
      document.getElementById("navBar").style.height = dropdownArkivEdge.bottom + "px";
      document.getElementById("navBar").classList.add("expand");
    } else if (decisions.classList.contains('expand')) {
      document.getElementById("navBar").style.height = "auto";
      document.getElementById("navBar").classList.remove("expand");
    }
  }

  console.log(dropdownArkivEdge.top, dropdownArkivEdge.right, dropdownArkivEdge.bottom, dropdownArkivEdge.left);
  */
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-arkiv");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-flex')) {
        openDropdown.classList.remove('show-flex');
      }
    }
    var arkivAnimation = document.getElementsByClassName("dropdown-animation");
    var i;
    for (i = 0; i < arkivAnimation.length; i++) {
      var endAnimation = arkivAnimation[i];
      if (endAnimation.classList.contains('move')) {
        endAnimation.classList.remove('move');
      }
    }
  }
}

function moreFuncion() {

}
