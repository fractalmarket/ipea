//typed
document.addEventListener('DOMContentLoaded', function () {
  Typed.new('.typed', {
    strings: ["Best Fair",
                 "odds are going up",
                  "goaaaaaaaaal!!!!",
                  "improve your assets", ],
    typeSpeed: 100,
    backDelay: 500,
  });
});

//Just display when is charged.
if (document.readyState) {
  document.onreadystatechange = checkstate;
} else if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", saydone, false);
}

function checkstate() {
  if (document.readyState == "complete" || document.readyState == "complete") {
    document.getElementById("page").style.display = "flex";
  }
}

function saydone() {
  document.getElementById("page").style.display = "flex";
}
