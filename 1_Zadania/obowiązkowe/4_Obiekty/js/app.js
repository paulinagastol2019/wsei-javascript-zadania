    // zad. 0a

    const City = {
        capital : 'Krakow',
        population : 8,
        president : 'Ja',
        primeMinisters : ['jeden', 'Dwa']
    };

    const keys = Object.keys(City);
    for (const key of keys) {
        console.log(City[key]);
    }


    // zad. 0b

    const TimeMachine = {
        shape : 'kolo',
        model : 'xyz-200M',
        
        run : function(date, place) {
            console.log('Przenosimy się do ' + place + ' czas: ' + date);
        }
    };

    const TimeMachineKeys = Object.keys(TimeMachine);
    for (const key of TimeMachineKeys) {
        console.log(TimeMachine[key]);
    }

    TimeMachine.run('2035/12/24', 'Kraków');



    // zad. 1

    const Book = {
        title : 'Takie tam',
        author : 'Ja',
        numberOfPages : 45
    }

    const bookKeys = Object.keys(Book);
    for (const key of bookKeys) {
        console.log(Book[key]);
    }

    const Person = {

    }


// zad. 2
const person = {
    name: 'Tadzio',
    age: 20,
    sayHello: function(){
        console.log('Hello')
    }
}
for(let atributes in person){
    console.log(person[atributes])
}
person.sayHello()

// zad. 3
const recipe = {
    title: 'Zupa pomidorowa',
    servings: 2
}
recipe.ingredients = ['woda','2 puszki krojonych pomidorów','przyprawy','2 łyzki śmietany']
for(let atributes in recipe){
    console.log(recipe[atributes])
}

// zad. 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false; //zwracany jest 'false' co oznacza, że Łyżka nie istnieje