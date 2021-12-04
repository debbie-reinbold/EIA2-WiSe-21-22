/*
Aufgabe: <Aufgabe_09.1_OldMacDonaldsFarm >
Name: <Debbie Reinbold>
Matrikel: <268174>
Datum: <04.12.2021>
Quellen: <Ich habe mit Lisa, Asya und Tini zusammengearbeitet, Inspo bei Lektion 9.1 Asteroids >
*/



namespace OldMacDonaldsFarm {

    let timer: number = 0;



    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        day();
        document.querySelector("#nextDay")?.addEventListener("click", day);
    }




    export interface FoodInventory {
        name: string;
        amount: number;
    }

    export let inventory: FoodInventory[] = [{

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



    function day(): void {
        
        let elefant: Animal = new Animal("Benny", "Elefant", "Töröö");
        let ant: Animal = new Animal("Gisela", "Ant", "Diiip");
        let dog: Animal = new Animal("Kira", "Dog", "Wufff");
        let koala: Animal = new Animal("Fluffy", "Koala", "Hööhhh");
        let butterfly: Animal = new Animal("Claire", "Butterfly", "Suuuummm");

        setTimeout(function (): void {
            elefant.sing(0);
            elefant.eat(20, 0);
        },         500);

        setTimeout(function (): void {
            ant.sing(1);
            ant.eat(2, 1);
        },         2500);

        setTimeout(function (): void {
            dog.sing(2);
            dog.eat(15, 2);
        },         5000);

        setTimeout(function (): void {
            koala.sing(3);
            koala.eat(2, 3);
        },         8000);

        setTimeout(function (): void {
            butterfly.sing(4);
            butterfly.eat(5, 4);
        },         10000);

        let dayCounter: HTMLElement = <HTMLElement>document.querySelector("#day");
        timer++;
        dayCounter.innerHTML = "Day: " + timer;
        console.log("Day " + timer);
    }



}