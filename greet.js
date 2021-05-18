function GreetMe(greetedPeopleList = []){
    var greetedPeople = greetedPeopleList !==  null ? greetedPeopleList : [];
    var greetingMessage = '';
    var errorMessage = '';

    function greeting(name, language){
        language?.toLowerCase();
        var regName = /^[a-zA-Z]{3,15}$/;
        
        if (name === ''){
            greetingMessage = '';
            errorMessage = 'Please enter a name';
        }else{

            if(regName.test(name)){
                //console.log(language);
                if(language !== undefined){
                    errorMessage= '';
                    if (!greetedPeople.includes(name.toLowerCase())){
                        greetedPeople.push(name.toLowerCase());
                    }
                    if (language === 'isixhosa'){
                        greetingMessage = 'Molo, ' + name;
                    }else if (language === 'isizulu'){
                        greetingMessage = 'Saw`bona, ' + name;
                    }else if (language === 'english'){
                        greetingMessage = 'Hello, ' + name;
                    }
                }else{
                    greetingMessage = '';
                    errorMessage = 'Please choose a language to be greeted in';
                }
            }else{
                greetingMessage = '';
                errorMessage = 'Your name should not contain numbers';
            }
        }
    }


    function getErrorMsg() {
        return errorMessage;
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

    function resetCounter() {
        var reset = greetedPeopleCounter();
        reset = 0;
        location.reload();
        return reset;
    }

    return {
        greeting,
        getMessage,
        greetedPeopleCounter,
        getGreetedPeople,
        getErrorMsg,
        resetCounter
    }
} 