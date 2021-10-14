var RandomPoem;
(function (RandomPoem) {
    // Hier ein kleines Gedicht über meine Lieblingsserie 
    //Arrays mit Variablen 
    var subjects = ["Ted", "Robin", "Lily", "Marshall", "Barney"];
    var predicates = ["trinkt", "liebt", "sitzt", "arbeitet", "spielt"];
    var objects = ["ein Bier", "Eishockeyspieler", "im Mc Laren´s", "im obersten Gerichtshof", "Laser Tag"];
    // For-Schleife die rückwärts läuft 
    for (var i = subjects.length; i >= 1; i--) {
        var verse = getVerse(subjects, predicates, objects);
        console.log(verse);
    }
    // Funktion
    function getVerse(_subjects, _predicates, _objects) {
        var verseOutcome = " ";
        var randomSubject = Math.floor(Math.random() * _subjects.length);
        verseOutcome += _subjects.splice(randomSubject, 1) + " ";
        var randomPredicate = Math.floor(Math.random() * _predicates.length);
        verseOutcome += _predicates.splice(randomPredicate, 1) + " ";
        var randomObject = Math.floor(Math.random() * _objects.length);
        verseOutcome += _objects.splice(randomObject, 1) + " ";
        return verseOutcome;
    }
})(RandomPoem || (RandomPoem = {}));
// Ende 
//# sourceMappingURL=Random_poem.js.map