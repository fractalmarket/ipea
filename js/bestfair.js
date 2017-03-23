//typed
document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.typed', {
        strings: ["Best Fair","odds its upping", "goaaaaaaaaal!!!!",],
        typeSpeed: 100,
        backDelay: 500
      });
  });


function openIndex() {

    var newURL = "index.html";
    chrome.tabs.create({ url: newURL });


}

chrome.browserAction.onClicked.addListener(openIndex);

$('flip').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  alert( "This will be displayed only once." );
});
