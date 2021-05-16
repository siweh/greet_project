var textEnteredElement = document.querySelector(".text-input");
var radioBtnElement = document.querySelector(".form-input");
var messageElements = document.querySelector(".message");
var greetBtn = document.querySelector(".block");
var counter = document.querySelector(".circle__content");
var storing = document.querySelector(".demo");

//Storing greeted people
var storeGreetdPeople = getStoredGreetedPeople();
const greetings = GreetMe(storeGreetdPeople);
//console.log(getStoredGreetedPeople());
counter.innerHTML = greetings.greetedPeopleCounter();
function greet(){

    var checkedRadioButton = document.querySelector("input[name='language']:checked");
    //console.log(checkedRadioButton.value);
    //get the chosen language
    var getLanguage = checkedRadioButton.value;
    //get the name entered in the text area
    var getTextEntered = textEnteredElement.value;
    //console.log(textEnteredElement.value);
    greetings.greeting(getTextEntered, getLanguage);
    //Recieving the greeting message
    messageElements.innerHTML = greetings.getMessage();
   
    //Clear the value in the textBox after the greetme button is clicked
    textEnteredElement.value = "";

    //Storing the list of greeted people
    storeGreetedPeopleList(greetings.getGreetedPeople());

    //Counting the number of greeted people and display it on the counter in webpage
    counter.innerHTML = greetings.greetedPeopleCounter();
}


greetBtn.addEventListener('click', greet);