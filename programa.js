$('#enviar').click(function(){
  $.get("https://my-json-server.typicode.com/locheMC/prueba/Datos", function(datos, status){
    $.each(datos, function (ind, elem) {
      $('.datos').append("<tr><td>" + elem.ID + "</td><td>" + elem.Nombre + "</td><td>"+ elem.Edad + "</td></tr>");
    });
  });
});
