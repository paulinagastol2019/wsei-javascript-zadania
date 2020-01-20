    // 2.Tablice, zad. 0

        function distFromAvarage(tab) {

            let sum = 0;
            for (let x of tab) {

                sum += x
            }

            let y = sum / tab.length;
            let tab2 = [];
            for (let v of tab) {
                tab2.push(y - v);
            }
            console.log(tab2);


            return tab2;
        }

    distFromAvarage([1, 2, 3, 4, 5, 6, 7]);

    // // zad. 1

        const myFavouriteFruits = function() {
            let tab = ["banan", "kiwi", "mango"];
            console.log(tab[0]);
            console.log(tab[tab.lenght - 1]);

            for (let i = 0; i < tab.length; i++) {
                console.log(tab[i]);

            }
        }


    // zad. 3

        function printTable(array) {

            for (let x = 0; x < array.length; x++) {

                console.log(array[x]);

            }
            

        }

    printTable([1, 2, 3, 4]);

    // zad. 4

    function multiply(array) 
    {
        var y = 1;
        for (let x = 0; x < array.length; x++) 
        {
            y = y*array[x];
        }

        console.log(y);
    }
    multiply([1, 2, 3, 4]);

    // zad. 5

        function getEvenAverage(arr) {
            let sum = 0;
            let found = 0;
            
            for (let i of arr) 
            {
                if (i % 2 == 0) 
                {
                    sum += i;
                    found++;
                }
            }

            const avg = sum / found;
            console.log(found == 0 ? null : avg);
            return found == 0 ? null : avg;


        }

    // zad. 6

    const sortArray = function (arr) {


        
    }

    // zad. 7
