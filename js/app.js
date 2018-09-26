$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(document).ready(function () {
  // Agregando desplazamiento suave a todos los enlaces en:  navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // Usando el método animado () de jQuery para agregar un desplazamiento suave de la página
      // El número opcional (900) especifica la cantidad de milisegundos necesarios para desplazarse al área especificada
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {
        window.location.hash = hash;
      });
    }
  });
});

$(window).scroll(function () {
  $(".slideanim").each(function () {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
