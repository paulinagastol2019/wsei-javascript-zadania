
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// utorzenie funkcji o nazwie sortArray, która nie przyjmuje agrumentów
function sortArray() {

    // utorzenie tablicy oraz przypisanie do niej początkowych wartości
    var points = [41, 3, 6, 1, 114, 54, 64];

    // sortowanie tablicy przy użyciu funkcji porównującej
    points.sort(function (a, b) {
        // porównanie dwóch liczb poprzez odejmowanie i zwrócenie wyniku
        return a - b;
    });

    //zwraca posortowaną tablicę
    return points;
}

// wywołanie funkcji 'sortArray()'
sortArray();
