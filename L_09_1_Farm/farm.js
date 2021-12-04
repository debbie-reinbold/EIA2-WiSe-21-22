"use strict";
/*
Aufgabe: <Aufgabe_09.1_OldMacDonaldsFarm >
Name: <Debbie Reinbold>
Matrikel: <268174>
Datum: <04.12.2021>
Quellen: <Ich habe mit Lisa, Asya und Tini zusammengearbeitet, Inspo bei Lektion 9.1 Asteroids >
*/
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    let timer = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        day();
        document.querySelector("#nextDay")?.addEventListener("click", day);
    }
    OldMacDonaldsFarm.inventory = [{
            name: "Apple",
            amount: 1000
        },
        {
            name: "Insects",
            amount: 55
        },
        {
            name: "Meat",
            amount: 800
        },
        {
            name: "Eucalyptus Leaves",
            amount: 100
        },
        {
            name: "Nectar",
            amount: 70
        }];
    function day() {
        let elefant = new OldMacDonaldsFarm.Animal("Benny", "Elefant", "Töröö");
        let ant = new OldMacDonaldsFarm.Animal("Gisela", "Ant", "Diiip");
        let dog = new OldMacDonaldsFarm.Animal("Kira", "Dog", "Wufff");
        let koala = new OldMacDonaldsFarm.Animal("Fluffy", "Koala", "Hööhhh");
        let butterfly = new OldMacDonaldsFarm.Animal("Claire", "Butterfly", "Suuuummm");
        setTimeout(function () {
            elefant.sing(0);
            elefant.eat(20, 0);
        }, 500);
        setTimeout(function () {
            ant.sing(1);
            ant.eat(2, 1);
        }, 2500);
        setTimeout(function () {
            dog.sing(2);
            dog.eat(15, 2);
        }, 5000);
        setTimeout(function () {
            koala.sing(3);
            koala.eat(2, 3);
        }, 8000);
        setTimeout(function () {
            butterfly.sing(4);
            butterfly.eat(5, 4);
        }, 10000);
        let dayCounter = document.querySelector("#day");
        timer++;
        dayCounter.innerHTML = "Day: " + timer;
        console.log("Day " + timer);
    }
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=farm.js.map