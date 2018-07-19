const registrar = () =>{

let email= document.getElementById("email").value;
//console.log(email);
let contraseña = document.getElementById("contraseña").value;
//console.log(contraseña);
firebase.auth().createUserWithEmailAndPassword(email, contraseña)
.then(function(){
  /*cada vez que el usuario se registre setiene que verificar con la funcion verificar que va hacer  que le envie el correo electronico*/
  verificar()

})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  // ...
});

}

const ingreso = () =>{
  let email2= document.getElementById("email2").value;
  //console.log(email);
  let contraseña2 = document.getElementById("contraseña2").value;
  //console.log(contraseña);
  firebase.auth().signInWithEmailAndPassword(email2,contraseña2).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

}
/*funcion que verifica si existe algun usuario*/
const observador = ()=>{

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    aparece();
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
   console.log("no existe usurio activo")
    // User is signed out.
    // ...
  }
});
}
observador();

const aparece = (user) =>{
  //let user=user;
  let contenido = document.getElementById("contenido");
//if(user.emailVerified){
  contenido.innerHTML = `<p>Bienvenido</p> <button type="button" onclick="cerrar()"="button">Cerrar sesion</button>`
// }
}
const cerrar = () =>{

  firebase.auth().signOut()
  .then(function (error){
    console.log("Saliendo...")
  })
  .catch(function(error){
    console.log(error)
  })
}
/*funcion para enviar el correo electronico*/
const verificar = () =>{

  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
/*  el .catch se ejecuta en caso de que no se cumpla lo anterior*/
console.log("Enviando correo....")
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}
