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