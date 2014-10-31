function encontrame() {
    
  var output = document.getElementById("out");
  
  if (!navigator.geolocation){
    locacion.innerHTML = "<p>La geolocalizacion no esta soportada por su navegador</p>";
    return;
  }

   function geo_success(position) {
     
    var latitud  = position.coords.latitude;
    var longitud = position.coords.longitude;
    
    locacion.innerHTML = "Latitud: "+ latitud + "<br> Longitud: " + longitud;
    
    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitud + "," + longitud + "&zoom=13&size=300x300&sensor=false";

    locacion.appendChild(img);
   }

   function geo_error() {
    alert("Su posicion no esta disponible");
   }
   
   locacion.innerHTML = "Buscando .."
   navigator.geolocation.getCurrentPosition(geo_success, geo_error);
}




