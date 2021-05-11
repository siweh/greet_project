var textEnteredElement = document.querySelector(".text-input");
var radioBtnElement = document.querySelector(".form-input");
var messageElements = document.querySelector(".message");
var greetBtn = document.querySelector(".block");
var counter = document.querySelector(".circle__content");

const greetings = GreetMe();
function greet(){

    var checkedRadioButton = document.querySelector("input[name='language']:checked");
    //console.log(checkedRadioButton.value);
    var getLanguage = checkedRadioButton.value;
    var getTextEntered = textEnteredElement.value;
    //console.log(textEnteredElement.value);
    greetings.greeting(getTextEntered, getLanguage);
    messageElements.innerHTML = greetings.getMessage();
    //greetings.greeting();
    console.log(counter.innerHTML);
    counter.innerHTML = greetings.greetedPeopleCounter();

}

greetBtn.addEventListener('click', greet);