(function(window) {
    var goodbyeSpeaker = new Object();
    var speakWord = "Good Bye";
    goodbyeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.goodbyeSpeaker = goodbyeSpeaker;
})(window);