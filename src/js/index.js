initializeFirebase();
initializeGoogle();
initializeFace();
//FUNCION PARA EL REGISTRO DE USUARIOS
let register = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
        verification();
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        // ...
      });
}
//FUNCION PARA EL ACCESO DE USUARIOS
let entry = () => {
    let email = document.getElementById('email2').value;
    let password = document.getElementById('password2').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorCode);
        alert(errorMessage);
      });
}
//VERIFICACIÓN DE LA PAGINA WEB
let observer = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('Existe usuario activo');
            //SE EJECUTA LA FUNCION DEL CONTENIDO, UNA VEZ QUE SE INICIA SESION
            container(user);
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          console.log('*********');
          console.log(user.emailVerified);
          console.log('*********');
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('No existe usuario activo');
          // ...
        }
      });

}
observer();
//FUNCIÓN QUE MUESTRA EL CONTENIDO
let container = (user) =>{
    // location.href = 'otraPagina.html';
    var user = user;
    location.href = 'otraPagina.html';
    if(user.emailVerified){
        // let content = document.getElementById('content');
        // content.innerHTML=
        // `<p>Bienvenido</p>
        // <img src="result.user.photoURL">
        // <button onclick="closed()">Cerrar Sesión</button>`;

    }

}
//FUNCION PARA LA VERIFICACION DEL CORREO
let verification = () =>{
    var user = firebase.auth().currentUser;

user.sendEmailVerification()
.then(function() {
  // Email sent.
  console.log('Enviando correo...');
})
.catch(function(error) {
  // An error happened.
  console.log(error);
});
}

