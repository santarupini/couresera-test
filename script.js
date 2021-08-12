(function() {
    var names = ["Jivitha", "Santa", "Julian", "Amisya", "jarshana", "Kiki", "jolita", "Pretty", "JJ", "Yasmine"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            goodbyeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();