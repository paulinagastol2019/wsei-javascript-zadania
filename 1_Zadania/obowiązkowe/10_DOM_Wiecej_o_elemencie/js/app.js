    document.addEventListener("DOMContentLoaded", function () {
        /*
        Poniżej napisz kod rozwiązujący zadania
        */


    // zad. 0

    const elements = document.querySelectorAll('.ex5 li');
    for (let i=0; i<elements.length; i++){

        if( i % 2 == 0) {
            elements[i].getElementsByClassName.backgroundcolor = 'green'
        }

        if (i% 3 == 0) {
            elements[i].style.textDecoration = 'underline';
        }
        
        elements[4].className = 'big';

    }

    // zad. 1

    let chromeElement = document.querySelector('.chrome');
    let edgeElement = document.querySelector('.edge');
    let firefoxElement = document.querySelector('.firefox');

    edgeElement.style.backgroundImage ='url(../assets/img/edge.png';
    firefoxElement.style.backgroundImage ='.url(../assets/img/firefox.png)';

    chromeElement.style.width = '100px'; 

    // zad. 2

    let name = document.querySelector('.name');
    let color = document.querySelector('#fav_color');
    let meal = document.querySelector('#fav_meal');

    nameSpam.innerHTML = 'Paulina';
    color.innerHTML = 'różowy';
    meal.innerHTML = 'placki ziemniaczane';

    let ex3=document.querySelector('.ex3');
    ex3.querySelector('ul').classList.add('menu');

    let ex3=document.querySelector


    // zad. 3

    function ex3(){
        const menu = document.querySelector('.ex3 ul')
        menu.classList.add('menu')

        const menuElement = document.querySelector('.ex3 ul li')
        Array.prototype.forEach.call(menuElement, element => {
            element.classList.add('menuElement')
        });

        const errorClass = document.querySelector('.error')
        Array.prototype.forEach.call(errorClass, element => {
            element.classList.remove('error')
        });
    }
    ex3();

    // zad. 4

    function ex4(){
        let list = document.querySelectorAll('.ex4 ul li')
        for(let index = 0; index < list.length; index++){
            list[index].setAttribute('data-id', index + 1)
        }
        
        return list
    }
    console.log(ex4())
    });