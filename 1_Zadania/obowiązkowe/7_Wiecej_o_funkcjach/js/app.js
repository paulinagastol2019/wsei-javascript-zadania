/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// utworzenie funkcji o nazwie jeden bez żadnych parametrów
function jeden() {

    // utworzenie zmiennej lokalnej
    // przypisanie do zmiennej wartości początkowej - 1
    var zmienna1 = 1;

    // stworzenie funkcji zagnieżdżonej o nazwie 'dwa' nie przyjmującej zadnych argumentów
    function dwa() {

        // wypisanie w konsoli przeglądarki wartości zmiennej 'zmienna1'
        console.log(zmienna1);

        // utworznie zmiennej lokalnej oraz przypisanie wartości początkowej 3
        var zmienna2 = 3;
    }

    // wywołanie fukcji 'dwa'
    dwa();

    // powinien wyskoczyć błąd, dlatego, że 'zmienna2' już nie jest widoczna w tym zasięgu ('zmienna2' możemy użyć tylko w funkcji zagnieżdżonej 'dwa()')
    console.log(zmienna2)
    console.log(zmienna2)
}

//wywolanie funkcji 'jeden'
jeden()