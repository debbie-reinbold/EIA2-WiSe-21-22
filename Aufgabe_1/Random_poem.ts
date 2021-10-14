namespace RandomPoem {
// Hier ein kleines Gedicht über meine Lieblingsserie 

//Arrays mit Variablen 
    let subjects: string[] = ["Ted", "Robin", "Lily", "Marshall", "Barney"];
    let predicates: string[] = ["trinkt", "liebt", "sitzt", "arbeitet", "spielt"];
    let objects: string[] = ["ein Bier", "Eishockeyspieler", "im Mc Laren´s", "im obersten Gerichtshof", "Laser Tag"];

// For-Schleife die rückwärts läuft 
    for (let i: number = subjects.length; i >= 1; i--) {
        let verse: string = getVerse(subjects, predicates, objects);
        console.log(verse);
    }

// Funktion
    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
        let verseOutcome: string = " ";

        let randomSubject: number = Math.floor(Math.random() * _subjects.length);
        verseOutcome += _subjects.splice(randomSubject, 1) + " ";

        let randomPredicate: number = Math.floor(Math.random() * _predicates.length);
        verseOutcome += _predicates.splice(randomPredicate, 1) + " ";

        let randomObject: number = Math.floor(Math.random() * _objects.length);
        verseOutcome += _objects.splice(randomObject, 1) + " ";



        return verseOutcome;
    }

}
// Ende 