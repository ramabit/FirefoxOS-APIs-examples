agregarAlarma = function(){
  var myDate  = new Date("15 de agosto, 2014 16:20:00");

	var data    = {
  		foo: "bar"
	}

	// The "honorTimezone" string is what make the alarm honoring it
	var request = navigator.mozAlarms.add(myDate, "honorTimezone", data);

	request.onsuccess = function () {
			alert("Se agrego la alarma correctamente");
	};

	request.onerror = function () { 
  		console.log("Ocurrio un error: " + this.error.name);
	};
}			