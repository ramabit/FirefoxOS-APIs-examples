function obtenerNombreRedLargo(){
  return navigator.mozMobileConnection.data.network.longName;
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


