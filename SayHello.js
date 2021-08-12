(function(window) {
    var helloSpeaker = new Object();
    var sayWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(sayWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);