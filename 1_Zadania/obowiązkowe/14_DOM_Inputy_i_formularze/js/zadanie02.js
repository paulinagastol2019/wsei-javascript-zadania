    window.addEventListener('DOMContentLoaded', function(){
        // chowamy wszystkie obrazki
        hideElements();

        // reakcja na kliknięcie przycisku
        document.querySelector('button').addEventListener('click', function(e){
            e.preventDefault();

            var select = document.querySelector('select[class="form-control"]');
            switch (select.value)
            {
            case 'Windows':
                hideElements();
                document.querySelector('img[alt="Windows"]').style.display = 'block';
                break;

            case 'Ubuntu':
                hideElements();
                document.querySelector('img[alt="Ubuntu"]').style.display = 'block';
                break;

            case 'Os X':
                hideElements();
                document.querySelector('img[alt="Apple"]').style.display = 'block';
                break;
            }
        });
    });
