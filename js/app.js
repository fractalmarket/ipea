function openIndex() {
  
    var newURL = "index.html";
    chrome.tabs.create({ url: newURL });


}

chrome.browserAction.onClicked.addListener(openIndex);