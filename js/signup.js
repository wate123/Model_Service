function emailSignup(){
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode === 'auth/email-already-in-use'){
            alert('This email is already in use.');
        }else if(errorCode === 'auth/invalid-email') {
            alert('The password is too weak.');
        }else if(errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
        }else{
            alert(errorMessage)
        }
        console.log("sucess");
    });
}