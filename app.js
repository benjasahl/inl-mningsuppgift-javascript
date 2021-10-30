/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

/* Comment:
Function taskOne() sets the variable changeColor to "white" or "blue" depending on if 
the variable blue is false or true. If variable blue = false; changeColor is equal to 
"white", and variable blue is declared as false. 

Else changeColor is equal to "blue", and variable "blue" is declared as true. After the 
if-condition has been run, the background color of the "answer-one" element is changed to 
changeColor (which is either blue or white).
*/

let blue = false;
let changeColor;

function taskOne() {
  if (blue) {
    changeColor = "white";
    blue = false;
  } else {
    changeColor = "blue";
    blue = true;
  }
  document.getElementById("answer-one").style.backgroundColor = changeColor;
}

/*
 Uppgift 2: 
  Varje gång man klickar på knappen ska ett nytt random-värde 
  läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
  */

/* Comment:
When using the function "taskTwo" the variable "randomNumber" first 
randomizes a number between 0-1000. After that the newly added "randomNumber" 
is pushed to the "numbers"-array, and then it  gets rendered to the div with 
id "answer-two".
*/

const numbers = [234, 986, 784];
let randomNumber;

function taskTwo() {
  randomNumber = Math.floor(Math.random() * 1001);
  numbers.push(randomNumber);
  document.getElementById("answer-two").innerHTML = numbers;
}

/*
  Uppgift 3: 
  Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
  ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
  inte är helg ska du trigga en alert med meddelandet "FML"
  */

/* Comment:
  Firstly, the constant date is set to declare the current date and the variable 
  "today = date.getDay();" collects the current day. If the value of today is 
  either 6 (saturday) or 0 (sunday) then taskThree will alert "Wohoo it's weekend". 
  Else if today is any other value taskThree will alert "FML" */

const date = new Date();
let today = date.getDay();

function taskThree() {
  if (today === 6 || today === 0) {
    alert("Woohooo it's weekend");
  } else {
    alert("FML");
  }
}

/*
  Uppgift 4: 
  Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
  undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
  ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
  eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
  */

/* Comment:
  When running the function "multiplier" it will first check for a condition; if the value type 
  of the first argument "valueOne" and the second argument "valueTwo" is a number, an alertbox 
  will message: "Produkten är: " + (value of valueOne) multiplied by (value of valueTwo).
  
  However if either the value type of "valueOne" and/or "valueTwo" is anything else than a number, 
  an alertbox will message: "Jag kan bara multiplicera nummer".
   */

function multiplier(valueOne = 4, valueTwo = 3) {
  if (typeof valueOne == "number" && typeof valueTwo == "number") {
    alert("Produkten är: " + valueOne * valueTwo);
  } else {
    alert("Jag kan bara multiplicera nummer.");
  }
}

function taskFour() {
  multiplier();
}

/*
  Uppgift 5: 
  Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
  ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
  du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
  prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold
  
  Det kommer alltså att se ut såhär
  Ätligt: banan, äpple, citron
  Skräp: apelsin, päron
  */

/* Comment:
When using the function "taskFive" a for-loop will iterate through the fruits-array
until it has reached the final value. The for-loop contains a switch-statement which 
will check the current iteration [i] and depending on the fruit each case states, 
it will push a string containing the stated fruit into either the eatable-array or 
the trash-array. 

When the for-loop has iterated through every value in the fruits-array, the "updated" 
eatable- and trash-array will be rendered in the "answer-five" element with the 
prefixes "Ätligt:" and "Skräp" set in bold.
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  for (let i = 0; i < fruits.length; i++) {
    switch (fruits[i]) {
      case "banan":
        eatable.push(" banan");
        break;
      case "äpple":
        eatable.push(" äpple");
        break;
      case "citron":
        eatable.push(" citron");
        break;
      case "apelsin":
        trash.push(" apelsin");
        break;
      case "päron":
        trash.push(" päron");
    }
  }
  document.getElementById("answer-five").innerHTML =
    "Ätligt:".bold() + eatable + "<br>" + "Skräp:".bold() + trash;
}

/*
  Uppgift 6: 
  Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
  ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
  du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
  namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.
  
  Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
  prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
  married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold
  
  Det kommer alltså att se ut såhär
  Över 30: Christian
  Under 30: Diana,Carl,Karin
  Gift: Christian,Diana
  Ogift: Carl,Karin
  */

/* Comment:
  Function taskSix contains a for-loop which iterates through the "persons"-array 
  until it has reached the final value. The first if-statement in the for-loop is 
  set to check if a iterated persons ".age" value is less than 30, in that case it
  will push the iterated persons.name to the "underThirty"-array. Else the iterated
  persons.name will be pushed to the "overThirty"-array.

  The second if-statement is set to check if the iterated persons ".married" value 
  is true, and in that case the iterated persons.name will be pushed to the "married"-array.
  Else the iterated persons.name will be pushed to the "notMarried"-array.

  Finally the function will render out the "updated" arrays in the "answer-six"-div 
  prefixed in bold.
   */

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age < 30) {
      underThirty.push(persons[i].name);
    } else {
      overThirty.push(persons[i].name);
    }

    if (persons[i].married === true) {
      married.push(persons[i].name);
    } else {
      notMarried.push(persons[i].name);
    }
  }

  document.getElementById("answer-six").innerHTML =
    "Över 30: ".bold() +
    overThirty +
    "<br>" +
    "Under 30: ".bold() +
    underThirty +
    "<br>" +
    "Gift: ".bold() +
    married +
    "<br>" +
    "Ogift: ".bold() +
    notMarried;
}

/*
  Uppgift 7: 
  Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
  ut texten på en ny rad i diven "answer-seven"
  */

/* Comment:
  Function taskSeven contains a for-loop which iterates through every value in the 
  "addMeSomeLineBreaks", which is declared as the variable "x". Inside the for-loop
  an if-statement is defined; if x is equal to "," (comma), the empty variable lineBreak
  will replace the comma with a new comma and a <br> (line break). Else the lineBreak 
  will add x (the value that already exists in addMeSomeLineBreaks).

Finally the function will render out the updated lineBreak-variable in the 
"answer-seven"-div which will contain the values from addMeSomeLineBreaks 
string, but with linebreaks after each comma.
  */

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

let lineBreak = "";

function taskSeven() {
  for (let x of addMeSomeLineBreaks) {
    if (x === ",") {
      lineBreak += ", <br>";
    } else {
      lineBreak += x;
    }
  }
  document.getElementById("answer-seven").innerHTML = lineBreak;
}

/*
  Uppgift 8: 
  Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
  efter att tre sekunder har gått ska diven visas som vanligt igen
  */

/* Comment:
The function showCard is set to display the "card-eight"-div as block (it will be shown).
Function taskEight will first set display of the "card-eight"-div to "none" (it will be hidden).
After that it will set the setTimeount function to the "showCard"-function to 3000 miliseconds (3 seconds).

When using the taskEight-function; the "card-eight"-div wiil first be hidden and after 3 seconds it will 
run the showCard-function, which will make the "card-eight"-div visible again.
 */

function showCard() {
  document.getElementById("card-eight").style.display = "block";
}

function taskEight() {
  document.getElementById("card-eight").style.display = "none";
  setTimeout(showCard, 3000);
}

/*
  Uppgift 9: 
  Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
  answer-container till blå, annars ska den ändras till röd
  */

/* Comment:
  The dates-constant declares the current date, and the hours-variable will be set to the 
  current hour by using the getHours function. Also the constant allDivs functions as an
  array for all the "answer-container"-divs. 

  The taskNine-function contains a for-loop which will iterate through every value in the
  allDivs-array (which is every "answer-container"-div). Inside the for-loop an if-statement 
  will see if hours is bigger than or equal to 17 (the time is either 17:00 or later).
  In that case the iterated divs background color in allDivs will be set to blue. Else the
  iterated divs background color will be set to red.
  */
const dates = new Date();
let hours = dates.getHours();
const allDivs = document.getElementsByClassName("answer-container");

function taskNine() {
  for (let i = 0; i < allDivs.length; i++) {
    if (hours >= 17) {
      allDivs[i].style.backgroundColor = "blue";
    } else {
      allDivs[i].style.backgroundColor = "red";
    }
  }
}

/*
  Uppgift 10: 
  Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
  calculator-funktionen med tre argument (se taskTen-funktionen), 
  i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
  första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
  När resultatet har beräknats ska detta visas i en alert-box. 
  
  Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
  och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
  om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
  */

/* Comment:
  Firstly the correctOperator-array is declared with the different operators (add, subtract, multiply and divide).
  The calculator-function contains an if-statement which will run a switch-statement if the value type of the 
  arguments valueOne and valueTwo is a number, and if a value from the correctOperator-array is included in 
  the operator-argument. Else an alert-box will message "Något är fel". 

  The switch-statement will look at the operator value, and depending on the value it will do different 
  mathematical operations:
  In the case that the operator is equal to "add", an alert-box will message 
  "Summan är: " + ((value of valueOne) added with (value of valueTwo)).

  In the case that the operator is equal to "subtract", an alert-box will message 
  "Differensen är: " + ((value of valueOne) subtracted with (value of valueTwo)).

  In the case that the operator is equal to "multiply", an alert-box will message 
  "Produkten är: " + (value of valueOne) multiplied with (value of valueTwo).

  In the case that the operator is equal to "divide", an alert-box will message 
  "Kvoten är: " + (value of valueOne) divided with (value of valueTwo)).
  */

const correctOperator = ["add", "subtract", "multiply", "divide"];

function calculator(valueOne = 7, valueTwo = 2, operator = "add") {
  if (
    typeof valueOne == "number" &&
    typeof valueTwo == "number" &&
    correctOperator.includes(operator)
  ) {
    switch (operator) {
      case "add":
        alert("Summan är: " + (valueOne + valueTwo));
        break;
      case "subtract":
        alert("Differensen är: " + (valueOne - valueTwo));
        break;
      case "multiply":
        alert("Produkten är: " + valueOne * valueTwo);
        break;
      case "divide":
        alert("Kvoten är: " + valueOne / valueTwo);
        break;
    }
  } else {
    alert("Något är fel.");
  }
}

function taskTen() {
  calculator();
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
}
