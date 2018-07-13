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