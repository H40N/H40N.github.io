
function dropdownFunction() {
  document.getElementById("dropdown-arkiv").classList.toggle("show-flex");
  setTimeout(() => { document.getElementById("dropdown-animation").classList.toggle("move"); }, 50);
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
