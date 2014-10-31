function obtenerNombreRedLargo(){
  return navigator.mozMobileConnection.data.longName;
}

function obtenerNombreRedCorto(){
  return navigator.mozMobileConnection.data.network.shortName;
}

function obtenerMCC(){
  return navigator.mozMobileConnection.data.network.mcc;
}

function obtenerMNC(){
  return navigator.mozMobileConnection.data.network.mnc;
}


function obtenerEstadoRed(){
  return navigator.mozMobileConnection.data.network.state;
}

//document.getElementsByTagName('button').onclick 
window.onload= function(){
  console.log("dale")
	nombreLargo.innerHTML = "Nombre de red (largo): " + obtenerNombreRedLargo();
  	nombreCorto.innerHTML = "Nombre de red (corto): " + obtenerNombreRedCorto();
  	mcc.innerHTML = "MCC: " + obtenerMCC();
  	mnc.innerHTML = "MNC: " + obtenerMNC()
  	estado.innerHTML = "Estado de red: " + obtenerEstadoRed()
}




