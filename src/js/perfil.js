let porfile = document.getElementById('btnPorfile');
let nameUser = document.getElementById('nameUser');
let emailUser = document.getElementById('emailUser');
const porfileUser = () =>{
let user = firebase.auth().currentUser;
let name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;
  nameUser.innerHTML = name;
  emailUser.innerHTML = email;
  document.getElementById('imagenaqui').src = photoUrl;

     

}
    }
porfile.addEventListener('click', porfileUser);