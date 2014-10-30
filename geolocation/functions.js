function encontrame() {
    
  var output = document.getElementById("out");
  
  if (!navigator.geolocation){
    output.innerHTML = "<p>La geolocalizacion no esta soportada por su navegador</p>";
    return;
  }

   function geo_success(position) {
    document.getElementById("locacion").value = "";
    locacion.value = "Mi posicion actual: \n Latitud: "+ position.coords.latitude + "\n Longitud: " + position.coords.longitude;
   }

   function geo_error() {
    alert("Su posicion no esta disponible");
   }

   navigator.geolocation.getCurrentPosition(geo_success, geo_error);
}




