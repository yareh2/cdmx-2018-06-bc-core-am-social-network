(function(){
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCAqC6yR2WZZP4YPZWkOnrHUHR2rIJBbtc",
    authDomain: "red-social-developers.firebaseapp.com",
    databaseURL: "https://red-social-developers.firebaseio.com",
    projectId: "red-social-developers",
    storageBucket: "red-social-developers.appspot.com",
    messagingSenderId: "825889803259"
  };
  firebase.initializeApp(config);

  //OBTENER ELEMENTOS
let txtEmail = document.getElementById('txtEmail');
let txtPassword = document.getElementById('txtPassword');
let btnLogin = document.getElementById('btnLogin');
let btnSignUp = document.getElementById('btnSignUp');
let btnLogout = document.getElementById('btnLogout');

  //EVENTO LOGIN
btnLogin.addEventListener('click', event => {
    //OBTENER EMAIL Y PASSWORD
    let email = txtEmail.value;
    let pwsd = txtPassword.value;
    let auth = firebase.auth();
    //SIGN IN
    let promise = auth.signInWithEmailAndPassword(email, pwsd);
    promise.catch(event => console.log(event.message));
    
});
//Añadir evento signup
btnSignUp.addEventListener('click', event =>{
    //OBTENER EMAIL Y PASSWORD
    //Falta: Comprobar que el email es real
    let email = txtEmail.value;
    let pwsd = txtPassword.value;
    let auth = firebase.auth();
    //SIGN IN
    let promise = auth.createUserWithEmailAndPassword(email, pwsd);
    promise.catch(event => console.log(event.message));
    
});

btnLogout.addEventListener('click', event => {
    firebase.auth().signOut();
});

//AÑADIR UN LISTENER EN TIEMPO REAL

firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser)
    {
     console.log(firebaseUser);
     document.getElementById('btnLogout').style.display='inline';
    }
    else
    {
     console.log('No has iniciado Sesión');
     document.getElementById('btnLogout').style.display='none';
    }
  });
}());

//LOGIN
//PROVEDOR DEL SERVICIO
var provider = new firebase.auth.GoogleAuthProvider();
//jquery sujeta la etiqueta root
$('#login').click(function(){
    firebase.auth()
    .signInWithPopup(provider)//levantar una ventana y logear con google
    .then(function(result)//promesa cuando se ejecuta 
     {
         console.log(result.user);
     });
});
