function openIndex() {

    var newURL = "index.html";
    chrome.tabs.create({ url: newURL });


}

chrome.browserAction.onClicked.addListener(openIndex);

$('flip').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  alert( "This will be displayed only once." );
});
