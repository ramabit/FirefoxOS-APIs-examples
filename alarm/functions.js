function agregarAlarma(){
	var horario = prompt("Ingrese el horario de la alarma", new Date());
	var descripcionAlarma = prompt("Ingrese una descripcion", "");
	
	if (horario != null) {
  	miFecha = new Date(horario);
		
		var request = navigator.mozAlarms.add(miFecha, "honorTimezone", descripcionAlarma);

		request.onsuccess = function () {
			alert("Alarma agregada correctamente: " + descripcionAlarma);
		};

		request.onerror = function () { 
  		console.log("Ocurrio un error: " + this.error.name);
		};
	
	/*	navigator.mozSetMessageHandler("alarm", function (mozAlarm) { 
  		alert("alarma disparada: " + mozAlarm.data.toString()); 
		});
	
		navigator.mozHasPendingMessage("alarm");
		*/
	}
}


function borrarAlarma(){
	var id = prompt("Ingrese el el id de la alarma a borrar", "");
  navigator.mozAlarms.remove(id);
	alert("Se removio correctamente la alarma " + id)
}

function obtenerAlarmas(){
	var request = navigator.mozAlarms.getAll();

	request.onsuccess = function () {
  	this.result.forEach(function (alarm) {
    console.log('Id: ' + alarm.id);
    console.log('fecha: ' + alarm.date);
    console.log('Timezone: ' + alarm.respectTimezone);
    console.log('data: ' + JSON.stringify(alarm.data));
  	});
	};

	request.onerror = function () { 
  	console.log("Ocurrio un error: " + this.error.name);
	};
}