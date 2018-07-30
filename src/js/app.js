initializeFirebase();
// INICIALIZACION DE CLOUD FIRESTORE THROUGH FIREBASE
var db = firebase.firestore();
//FUNCION PARA GUARDAR LOS COMENTARIOS
function guardar(){
    let nombre = document.getElementById('nombre').value;


  db.collection("users").add({
      first: nombre,

  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('nombre').value = "";

  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

}
//LEER COMENTARIOS
let tabla =document.getElementById('tabla')
//onSnapshot hace que guarde los datos en tiempo real
db.collection("users").onSnapshot((querySnapshot) => {
  tabla.innerHTML = "";
  //se va air repitiendo por cada dato que este en el user
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `


          <td>${doc.data().first}</td>

          <button class="btn btn-info my-2 my-sm-0 btn-sm ml-2"onclick ="eliminar('${doc.id}')"><span class="glyphicon glyphicon-trash"></span></button>
          <button class="btn btn-info my-2 my-sm-0 btn-sm ml-2"onclick ="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')"><span class="glyphicon glyphicon-pencil"></span></button>

`
    });
});

//BORRAR COMENTARIOS
function eliminar(id){
  db.collection("users").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

//EDITAR COMENTARIOS
function editar(id,nombre,apellido,fecha){

document.getElementById('nombre').value = nombre;

let boton =document.getElementById('boton');
boton.innerHTML = "Editar";

boton.onclick = function(){
  var washingtonRef = db.collection("users").doc(id);

  let nombre = document.getElementById('nombre').value;

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
    first: nombre,

  })
  .then(function() {
      console.log("Document successfully updated!");
      boton.innerHTML = "Guardar";
      document.getElementById('nombre').value = "";

  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
}
}
//BOTON DE CERRAR SESION
let btnClosed = document.getElementById('btnClosed');
//FUNCION CERRAR SESIÓN
const cerrarSesion = () =>{
    firebase.auth().signOut()
    .then(function(){
        console.log('saliendo...');
    })
    .catch(function(error){
        console.log(error);
    })
    location.href="index.html"
}
btnClosed.addEventListener('click', cerrarSesion);
