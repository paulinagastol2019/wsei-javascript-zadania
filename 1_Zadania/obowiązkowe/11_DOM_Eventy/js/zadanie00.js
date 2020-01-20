// zad. 0a

let parents =document.querySelectorAll('.parent');
parents.forEach( e => e.addEventListener)

for (let i = 0; i < parents.length; ++i ){

addEvents(parents[1]);

}



function addEvents(element) {

    element.addEventListener('mouseover', function() {

        this.children[0].style.display = 'block';
    })
    element.addEventListener('mouseleave', function(){
        this.children[0].style.display = 'none';
    })
}

// zad. 0b