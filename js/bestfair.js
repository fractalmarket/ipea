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
        strings: ["Currently, it is estimated that less than 4% of bettors can stay in the market in long run. Most lose or give up their dream of making a living by sports betting after realizing the reality of trading. We aim, through this site, to offer a different tool from all the others. Conventional sports analysis sites show only raw numbers. No percentage, no probability, no filter. To achieve this kind of service, amateur gamblers end up paying high marks to 'gurus' and 'tutors' in the area, which often turns out to be very disappointing. Our intention is not to place ourselves or to replace those tutors or salesmen of virtual courses that you can easily find in bunches on the Internet. Instead! Our tools can improve their and  also your analysis knowledge before betting. Our website is just a filter to choose the best match in the type of bet that you feel most comfortable with. In other words, if you are a fan of over 1.5 or under 3.5, you simply have to click on these options which will automatically filter the best match of the day in order to bet on these respective markets."],
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
