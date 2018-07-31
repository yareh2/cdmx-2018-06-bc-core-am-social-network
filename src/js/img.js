alert("hola");
window.onload = inicializar;

let fichero;
let storageRef;

const inicializar = ()=>{

  fichero = document.getElementById('fichero');
  fichero.addEventListener("change", subirImagenAfirebase,false);
  //child el hijo del nodo raiz seria el directorio imagenes
  storageRef = firebase.storage().ref();
  }
  const subirImagenAfirebase = ()=>{
    let imagenASubir = fichero.files[0];
    let uploadTask = storageRef.child('imagenes/'+ imagenASubir.name).put(imagenASubir);
  }
