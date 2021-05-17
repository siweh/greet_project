//const { assert } = require("node:console");

describe("Greet Project", function(){
    context("Given a name and chosen a language", function(){
        const greetings = GreetMe();
        it("should display greeting for that user in a chosen language which is english", function(){
            greetings.greeting('Zola', 'english');
            assert.equal('Hello, Zola', greetings.getMessage());
        });

        it("should return a greeting for a user in a chosen language which is isixhosa", function(){
            greetings.greeting('Siweh', 'isixhosa');
            assert.equal('Molo, Siweh', greetings.getMessage());
        });

        it("should return greeting for a user in a chosen language which is isizulu", function(){
            greetings.greeting('Amira', 'isizulu');
            assert.equal('Saw`bona, Amira', greetings.getMessage());
        });
    });

    context("Given an invalid name", function(){
        const greetings = GreetMe();
        it("should return an error message saying name should not contain numbers", function(){
            greetings.greeting('Carry234s', 'isizulu');
            assert.equal('Your name should not contain numbers', greetings.getErrorMsg());
        })
    })

    context("Not given a name", function(){
        const greetings = GreetMe();
        it("should return a message which forces the user to enter a name", function(){
            greetings.greeting('', 'isizulu');
            assert.equal('Please enter a name', greetings.getErrorMsg());
        });
    });

    context("Not chosen a language to be greeted on", function(){
        const greetings = GreetMe();
        it("should return a message which enforces the user to choose a language", function(){
            greetings.greeting('Kelly', );
            assert.equal('Please choose a language to be greeted in', greetings.getErrorMsg());
        });
    });

    context("Counting a number of people greeted", function(){
        const greetings = GreetMe();
        it("should return a number of people greeted", function(){
            greetings.greeting('Amira', 'isizulu');
            greetings.greeting('Siweh', 'isixhosa');
            greetings.greeting('siweh', 'isixhosa');
            greetings.greeting('Zola', 'english');
            assert.equal(3, greetings.greetedPeopleCounter());
        });
    });

    context("Local storage", function(){
        it("should be able to store number of greeted people", function(){
            var isLocalStorage = true;
            storeGreetedPeopleList(['Sima', 'Mary'],isLocalStorage);
            assert.deepEqual(['Sima', 'Mary'], getStoredGreetedPeople(isLocalStorage));
            //clearStorage();
        });
    });

});