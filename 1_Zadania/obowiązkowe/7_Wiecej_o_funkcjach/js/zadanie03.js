    /// zad. 3
    
    // Wywoła się poprawnie ponieważ deklaracje funkcji się przenoszone na poczętek dokuementu
    // Zadziała poprawnie gdyż deklaracje funkcji zostaną przeniesione na początek dokumentu, zjawisko hoistingu
    sayHi();

    // sayWelcome is not defined - nie bedzie wywołana dlatego, że funkcja nie została zdefiniowana wcześniej
    sayWelcome();

    sayWelcome = function() {
        console.log("Cześć");
    }

    function sayHi() {
        console.log("Witaj");
    }