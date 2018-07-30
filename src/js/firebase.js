window.initializeFirebase = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyCAqC6yR2WZZP4YPZWkOnrHUHR2rIJBbtc",
      authDomain: "red-social-developers.firebaseapp.com",
      databaseURL: "https://red-social-developers.firebaseio.com",
      projectId: "red-social-developers",
      storageBucket: "red-social-developers.appspot.com",
      messagingSenderId: "825889803259"
    });
  };
  //LOGIN CON GOOGLE
  window.initializeGoogle = () => {
    let btnGoogle = document.getElementById('btnGoogle');
    let provider = new firebase.auth.GoogleAuthProvider();
    btnGoogle.addEventListener('click',event=>{
      firebase.auth()
    .signInWithPopup(provider)
    .then(function(result) {
        console.log(result.user);
        let userResult = result.user;
        document.getElementById('btnGoogle').style.display = 'none';
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    })
});
};
//LOGIN CON FACEBOOK
window.initializeFace = () => {
  let btnFace = document.getElementById('btnFace');
  let provider = new firebase.auth.FacebookAuthProvider();
  btnFace.addEventListener('click', event =>{          
      firebase.auth()
      .signInWithPopup(provider)
      .then(function(result) {
      console.log(result.user);
      document.getElementById('btnFace').style.display = 'none';
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
  })
});
};