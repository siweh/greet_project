function GreetMe(){
    var greetedPeople = []

    var greetingMessage = '';
    function greeting(name, language){
        language.toLowerCase();
        //console.log(name);
        //console.log(language);
        if (!greetedPeople.includes(name.toLowerCase())){
            greetedPeople.push(name.toLowerCase());
        }
        if (language === 'english'){
            greetingMessage =  'Hello, ' + name;
            //console.log('Siwe');
        }else if (language === 'isixhosa'){
            greetingMessage = 'Molo, ' + name;
        }else if (language === 'isizulu'){
            greetingMessage = 'Saw`bona, ' + name;
        }
    }

    function getMessage() {
        return greetingMessage;
    }

    function greetedPeopleCounter() {
        return greetedPeople.length;
    }
    return {
        greeting,
        getMessage,
        greetedPeopleCounter
    }
} 