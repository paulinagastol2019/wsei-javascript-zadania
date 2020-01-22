    window.addEventListener('DOMContentLoaded', () => {
        var menu = document.querySelector("#menu");
        var paragraf = document.querySelector("p");

        menu.classList.add("menu");
        paragraf.innerHTML = "to paragraf w zadaniu 1";

    });
    
     // po otworzeniu strony po raz pierwszy nie było błędów,
      ///pop przenisieniu <Script> do sekcji <head> pojawiły się błędy o nie znalezieniu obiektów do ktróych odwoływaliśmy się w js,
      //po dodaniu 'DOMContentLoaded' problem został rozwiązany
     