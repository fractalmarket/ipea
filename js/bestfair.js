//typed
document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.typed', {
        strings: ["Best Fair",
                 "odds are going up",
                  "goaaaaaaaaal!!!!",
                  "improve your assets",],
        typeSpeed: 100,
        backDelay: 500,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.purposed', {
        strings: ["BETDAQ is the second largest betting exchange operator with approximately 7% market share.BETDAQ is the second largest betting exchange operator with approximately 7% market share.BETDAQ is the second largest betting exchange operator with approximately 7% market share.BETDAQ is the second largest betting exchange operator with approximately 7% market share.BETDAQ is the second largest betting exchange operator with approximately 7% market share.BETDAQ is the second largest betting exchange operator with approximately 7% market share.BETDAQ is the second largest betting exchange operator with approximately 7% market share.BETDAQ is the second largest betting exchange operator with approximately 7% market share."],
        typeSpeed: 0,
        loop: false,
        backDelay: 50,
    });
});

function openIndex() {

    var newURL = "index.html";
    chrome.tabs.create({
        url: newURL
    });


}

chrome.browserAction.onClicked.addListener(openIndex);

$('flip').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    alert("This will be displayed only once.");
});
