    // zad. 2
    function createIdentityMatrix(rows, columns) {
        let matrix = new Array(rows);
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = new Array(columns);
        }
        let columnWith1 = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = j == columnWith1 ? 1 : 0;
            }
            columnWith1++;
        }
        return matrix;
    }

    console.log(createIdentityMatrix(4,4));

    // zad. 3
    function sortPlanet(planets) {
        return planets.sort((a, b) => b.numberOfMoons - a.numberOfMoons);
    }

    var planets = [
        {
            name: "Merkury",
            numberOfMoons: 0
        },
        {
            name: "Wenus",
            numberOfMoons: 0
        },
        {
            name: "Ziemia",
            numberOfMoons: 1
        },
        {
            name: "Mars",
            numberOfMoons: 2
        },
        {
            name: "Jowisz",
            numberOfMoons: 63
        },
        {
            name: "Saturn",
            numberOfMoons: 60
        },
        {
            name: "Uran",
            numberOfMoons: 27
        },
        {
            name: "Neptun",
            numberOfMoons: 13
        }
    ];

    console.log(sortPlanet(planets));

    // zad. 1
    
    function getNumber(value, array) {
        return array ? array.indexOf(value) != -1 : false;
    }

    console.log(getNumber(2, [33, 54, 2, 1, 4, 100])); // true
    console.log(getNumber(5, [33, 54, 2, 1, 4, 100])); // false
