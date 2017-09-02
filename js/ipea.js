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

body.onload = function () {
  document.getElementsByTagName('body').style.display = 'none';
};

window.onload = function () {
  document.getElementsByTagName('body').style.display = 'block';
};

var src = [url, '?', queryStr, 'callback=', nomeDaCallback].join('');
var script = document.createElement('script');
script.src = src;
script.onload = function (e) {
  callback(resposta, true, e);
}
script.onerror = function (e) {
  callback(resposta, false, e);
}
document.body.appendChild(script);

window.onload = executeMan();

function executeMan() {
  var script = parent.frames[0].createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = 'js/search.js';
  parent.frames[0].body.appendChild(script);
}
