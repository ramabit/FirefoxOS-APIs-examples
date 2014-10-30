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
			
	}
}


function borrarAlarma(){
	var id = prompt("Ingrese el el id de la alarma a borrar", "");
  navigator.mozAlarms.remove(id);
	alert("Se removio correctamente la alarma " + id)
}

function obtenerAlarmas(){
	var request = navigator.mozAlarms.getAll();
	document.getElementById("listaAlarmas").value = "";
	
	request.onsuccess = function () {
  	this.result.forEach(function (alarm) {
    document.getElementById("listaAlarmas").value 
    			+= 'Id: ' + alarm.id + "\n";
    document.getElementById("listaAlarmas").value
    			+='fecha: ' + alarm.date + "\n";
    document.getElementById("listaAlarmas").value 
    			+='Timezone: ' + alarm.respectTimezone + "\n";
    document.getElementById("listaAlarmas").value +=
    			'data: ' + JSON.stringify(alarm.data) + "\n";
    document.getElementById("listaAlarmas").value +=
    			"------------------------------   \n";
  	});
	};

	request.onerror = function () { 
  	console.log("Ocurrio un error: " + this.error.name);
	};
}

function hayAlarmasPendientes(){
	return navigator.mozHasPendingMessage("alarm");
}

function dispararAlarmas(){
	navigator.mozSetMessageHandler("alarm", function (mozAlarm) { 
  		alert("alarma disparada: " + mozAlarm.data.toString()); 
	});
}
