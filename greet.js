function GreetMe(greetedPeopleList = []){
    var greetedPeople = greetedPeopleList !==  null ? greetedPeopleList : [];
    var greetingMessage = '';

    function greeting(name, language){
        language.toLowerCase();
        var regName = /^[a-zA-Z]/;
        
        if (name === ''){
            greetingMessage = 'Please enter a name';
        }else{

            if(regName.test(name)){
               
                if (!greetedPeople.includes(name.toLowerCase())){
                    greetedPeople.push(name.toLowerCase());
                }
                if (language === 'isixhosa'){
                    greetingMessage = 'Molo, ' + name;
                }else if (language === 'isizulu'){
                    greetingMessage = 'Saw`bona, ' + name;
                }else{
                    greetingMessage = 'Hello, ' + name;
                }
            }else{
                greetingMessage = 'Your name should not contain numbers';
            }
        }
    }

    function getMessage() {
        return greetingMessage;
    }

    function greetedPeopleCounter() {
        return greetedPeople.length;
    }

    function getGreetedPeople() {
        return greetedPeople;
    }

    function validate(greetedPeopleList){

    }
    return {
        greeting,
        getMessage,
        greetedPeopleCounter,
        getGreetedPeople
    }
} 