function storeGreetedPeopleList(greetedPeopleList, isLocalStorageTest = false) {
    //console.log(greetedPeopleList);
    var listGreetedPeople = JSON.stringify(greetedPeopleList);

    //For tests
    if (isLocalStorageTest) {
        localStorage.setItem('testStorage', listGreetedPeople);
        return; //terminate 
    }

    localStorage.setItem('listGreetedPeople', listGreetedPeople);
};

function getStoredGreetedPeople(isLocalStorageTest = false) {
    
    //For tests
    if (isLocalStorageTest) {
       return JSON.parse(localStorage.getItem('testStorage'));
    }

    var storedGreetedPeople = localStorage.getItem('listGreetedPeople');
    
    return JSON.parse(storedGreetedPeople);
}

function clearStorage() {
    localStorage.clear();
}