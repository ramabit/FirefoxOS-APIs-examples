function encontrame() {
    
  var output = document.getElementById("out");
  
  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

   function geo_success(position) {
    document.getElementById("locacion").value = "";
    locacion.value = "Mi posicion actual: \n Latitud: "+ position.coords.latitude + "\n Longitud: " + position.coords.longitude;
   }

   function geo_error() {
    alert("Sorry, no position available.");
   }

   navigator.geolocation.getCurrentPosition(geo_success, geo_error);
}




