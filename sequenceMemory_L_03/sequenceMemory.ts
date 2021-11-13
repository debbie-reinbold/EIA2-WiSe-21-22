namespace L03_Sequenz {
  // Zusammenarbeit mit Lisa, Tini und Asya!
  //Funktioniert leider nicht alles so ganz wirklich und vieles ist gelb/rot unterstrichen ... sorry :(
  // Aus Zeitgründen konnte ich aber nicht mehr länger nach Lösungen suchen. 

  // Variablen deklarieren
  let form: HTMLElement;
  let memoryField: HTMLElement;
  let startButton: HTMLElement;
  let sequence: string[] = [];
  let input: string;
  let timer: number;
  let sequenceRightOrder: string[];


  // Variablen dekalrieren, die vom Nutzer ausgewählt werden
  let formValues: string[] = [];
  let chosenBackground: string;
  let chosenFont: string;
  let chosenCardSize: string;
  let chosenCardColor: string;
  let chosenFontColor: string;


  // let formData: FormData;

  window.addEventListener("load", handleLoad);

  function handleLoad(_event: Event): void {
    form = <HTMLElement>document.querySelector("#settings");
    form.addEventListener("change", clickHandler);
    memoryField = <HTMLDivElement>document.querySelector("#field");
    startButton = <HTMLButtonElement>document.querySelector("#startButton");
    startButton.addEventListener("click", createCard);
  }
  function clickHandler(_event: Event): void {

    let formData: FormData = new FormData(document.forms[0]);
    formValues = [];
    for (let entry of formData) {
      formValues.push(entry[1].toString());
    }
  }

  function createCard(_word: Event): void {
    input = prompt("enter your sequenz");
    if (input == "" || input == null) {
      alert("your funny bro, enter a sequenz");
    }
    else {
      form.classList.add("hidden");
      startButton.classList.add("hidden");

      //let gamefield = document.createElement("div")
      //gamefield.classList.add("card-content");
      //let body = document.querySelector("body")
      //let timer = document.createElement("span");
      //timer.id = "timer";
      //body.append(gamefield);
      //body.append(timer);

      sequence = input.split("");
      let gamefield: HTMLDivElement = document.createElement("div");
      gamefield.classList.add("row");
      for (let i: number = 0; i < input.length; i++) {
        let random: number = Math.floor(Math.random() * sequence.length);
        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("column");
        card.id = sequence.splice(random, 1).join();
        let test: string = ("<div class='card'>" + card.id + "</div>");
        card.innerHTML = test;

        // newdiv.classList.add("");
        //newdiv.style.background = document.getElementById('backgroundcolor').innerHTML;
        let body: HTMLBodyElement = document.querySelector("body");
        body.appendChild(memoryField);
        memoryField.appendChild(card);
        //document.body.style.backgroundColor = document.getElementById('backgroundcolor').innerHTML;
      }
      // Die eingegebenen Werte vom Nutzer werden eingespeichert
      chosenCardSize = formValues[2];
      chosenCardColor = formValues[3];
      chosenFontColor = formValues[4];
      chosenFont = formValues[5];

      // Style sollte sich anhand der Eingaben des Nutzer ändern, passiert aber nichts .... 
      document.body.style.background = chosenBackground;
      document.body.style.fontFamily = chosenFont;


      // Funktion für den Timer aufrufen
      timerUp();
    }
    //createGame();
  }
}

// Den Timer jede Sekunde hochzählen
function timerUp(): void {
  setInterval(function (): void {
    timer++;
  },          1000);
}

// Spiel sollte jetzt starten 
function createGame(): void {
  timer = 5;
}

// Die Karten werden hier kontrolliert, und verglichen, wenn die richtige Sequenz geweählt wurde,
// ist der Buchstabe zu sehen, und das Spiel kann fortgesetzt werden.

function checkCards(_event: MouseEvent): void {


  let array: string[] = [];

  let target: HTMLElement = <HTMLElement>_event.target;
  console.log(target);

  let textContent: string = <string>target.textContent;
  console.log(textContent);
  array.push(textContent);


  if (sequenceRightOrder[0] == array[0]) {
    console.log("You can continue!") ;
    // Das müsste irgendwie so weitergeführt werden, und wenn die Sequenz nicht übereinstimmt, wäre das Spiel verloren, 
    // wenn die Zeit abgekaufen ist. Ich glaube ich deklariere die Funktionen falsch, da so vieles rot angezeigt wird... 
  }
   
  // stopTimer wird aufgerufen, wenn die gewählte Spielzeoit abgelaufen ist --> Countdown z.B.
  stopTimer();

  function stopTimer(): void {

    console.log("Time over");
    clearInterval(timer);



  }
}
