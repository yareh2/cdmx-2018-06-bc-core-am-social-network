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
