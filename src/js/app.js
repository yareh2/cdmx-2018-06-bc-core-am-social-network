firebase.initializeApp({
  apiKey: "AIzaSyCAqC6yR2WZZP4YPZWkOnrHUHR2rIJBbtc",
  authDomain: "red-social-developers.firebaseapp.com",
  projectId: "red-social-developers"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

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

//Leer documentos

let tabla =document.getElementById('tabla')
//onSnapshot hace que guarde los datos en tiempo rel
db.collection("users").onSnapshot((querySnapshot) => {
  tabla.innerHTML = "";
  //se va air repitiendo por cada dato que este en el user
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `


          <td>${doc.data().first}</td>

          <button class="btn btn-danger"onclick ="eliminar('${doc.id}')">Eliminar</button>
          <button class="btn btn-warning"onclick ="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Editar</button>d>

`
    });
});

// borrar datos
function eliminar(id){
  db.collection("users").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

//editar documentos


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

//boton de cerrar sesison
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
