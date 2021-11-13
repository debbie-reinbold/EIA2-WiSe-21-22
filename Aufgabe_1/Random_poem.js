"use strict";
var RandomPoem;
(function (RandomPoem) {
    // Hier ein kleines Gedicht über meine Lieblingsserie 
    //Arrays mit Variablen 
    let subjects = ["Ted", "Robin", "Lily", "Marshall", "Barney"];
    let predicates = ["trinkt", "liebt", "sitzt", "arbeitet", "spielt"];
    let objects = ["ein Bier", "Eishockeyspieler", "im Mc Laren´s", "im obersten Gerichtshof", "Laser Tag"];
    // For-Schleife die rückwärts läuft 
    for (let i = subjects.length; i >= 1; i--) {
        let verse = getVerse(subjects, predicates, objects);
        console.log(verse);
    }
    // Funktion
    function getVerse(_subjects, _predicates, _objects) {
        let verseOutcome = " ";
        let randomSubject = Math.floor(Math.random() * _subjects.length);
        verseOutcome += _subjects.splice(randomSubject, 1) + " ";
        let randomPredicate = Math.floor(Math.random() * _predicates.length);
        verseOutcome += _predicates.splice(randomPredicate, 1) + " ";
        let randomObject = Math.floor(Math.random() * _objects.length);
        verseOutcome += _objects.splice(randomObject, 1) + " ";
        return verseOutcome;
    }
})(RandomPoem || (RandomPoem = {}));
// Ende 
//# sourceMappingURL=Random_poem.js.map