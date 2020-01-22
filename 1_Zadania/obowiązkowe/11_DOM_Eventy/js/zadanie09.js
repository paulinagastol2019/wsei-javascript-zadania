document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var b = document.getElementById("b");

  // Tutaj this wskazuje obiekt document
  console.log("obiekt document: ", this);

  a.addEventListener("click", function (event) {
    // This wskazuje na element DOM o id 'a'
    console.log("a: ", this);
  });

  b.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id 'b'
    console.log("b: ", this);


    function innerFuncOne() {
      // Tutaj this wskazuje na element Window, bo funkcja została wywołana bez żadnego kontekstu.
      console.log("innerFuncOne: ", this);
    }
    innerFuncOne();

  });

})
