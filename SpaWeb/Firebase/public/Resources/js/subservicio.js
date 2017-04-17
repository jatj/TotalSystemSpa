var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();
$(function(){
  function resizeImg(){
    var width = $('#subservicioImg').width()*0.25;
    $('#subservicioImg').css({
        'height': width + 'px'
    });
    $('#filter').css({
        'height': width + 'px'
    });
  }
  function centerText(){
    $.each($('#servicioCategoria'),function(){
      var textW = $(this).width()/2;
      var textH = $(this).height()/2;
      $(this).css({
          'top': 'calc(50% - '+textH+'px)',
          'left': 'calc(50% - '+textW+'px)'
      });
    });
    
  }
  function servicio(titulo,descripcion,duracion){
    return "<div class='servicio'><div class='servicioTitulo text-center'>"+titulo+"</div><div class='servicioDescripcion'>"+descripcion+"</div><div class='servicioDuracion'>Duración: "+duracion+"</div></div>";
  }
  resizeImg();
  centerText();
  $( window ).resize(function() {
      resizeImg();
      centerText();
  });
  const dbService  = firebase.database().ref("Servicios/"+QueryString.category+"/"+QueryString.subCategory);
  var subCategoryData = null;
  dbService.on("value",function(snap) {
    subCategoryData=snap.val();
    if(subCategoryData!=null){
      var htmlServicios = "";
      $("#subservicioImg").css({
        'width': '100%',
        'background-image': 'url('+subCategoryData.image+')',
        'background-attachment': 'fixed',
        'background-position':'50%',
        'background-size': 'cover',
        'background-repeat': 'no-repeat', 
      });
      $("#descripcionServicios").html(subCategoryData.Descripcion);
      $("#servicioCategoria").html(QueryString.subCategory);
      for(index in subCategoryData.servicios){
        var serv = subCategoryData.servicios[index]
        htmlServicios+=servicio(serv.Nombre,serv.Descripcion,serv.Duracion)
      }
      $("#contentServicios").html(htmlServicios);
    }
  });
})