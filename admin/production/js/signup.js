var signUpButton = document.getElementById('send');
var signInButton = document.getElementById('login');
var confirm = document.getElementById('confirmation');
var signInConfirm = document.getElementById('sign_in_confirmation');

function buttonPress() {

    if(email === ""){
        document.signupform.signupemail.focus();
        confirm.innerHTML = "Please enter your Email."
    }else {
    if(password === ""){
        document.signupform.signuppass.focus()
        confirm.innerHTML = "Please enter your password."
    }else {
        if (password === repassword) {
            var result = emailSignup(email, password);
            if (result === false){
                confirm.innerHTML = "Your account with the email '"+ email + "' has been created. Please log in.";
            }
        }
        else {
            confirm.innerHTML = "Password does not match. Please check again.";
        }
    }
    }
}

function emailSignup(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log('test');
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode === 'auth/email-already-in-use'){
            confirm.innerHTML = ('This email is already in use.');
            return false;
        }else if(errorCode === 'auth/invalid-email') {
            confirm.innerHTML = ('The email is invalid.');
            return false;
        }else if(errorCode === 'auth/weak-password') {
            confirm.innerHTML = ('The password is too weak.');
            return false;
        }else{
            alert(errorMessage);
            return false;
        }
    });
    return true;
}
signUpButton.addEventListener('click', emailSignup);

function emailSignIn() {
        var email = document.getElementById("username0").value;
        var password = document.getElementById("password0").value;
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (email === ""){
            document.signinform.loginemail.focus();
            signInConfirm.innerHTML = "Email cannot be empty.";
            return false;
        }else if (atpos < 1 || dotpos - atpos < 2){
            signInConfirm.innerHTML = "Please enter correct Email";
            document.signinform.loginemail.focus();
            return false;
        }
        if(password === ""){
            document.signinform.loginpass.focus();
            signInConfirm.innerHTML = "Password cannot be empty.";
            return false;
        }

        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            if(user){
                window.location.href = "index.html";
            }
        }).catch(function(error) {
            // Handle Errors here.

            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorCode === 'auth/user-not-found'){
                signInConfirm.innerHTML = ('User not found.');
            }else if(errorCode === 'auth/invalid-email') {
                signInConfirm.innerHTML = ('This Email is invalid.');
            }else if(errorCode === 'auth/wrong-password') {
                signInConfirm.innerHTML = ('Wrong Password.');
            }
        });

        return true;

}

signInButton.addEventListener('click', emailSignIn,false);

<script>
$('#submitForm').on('submit', function () {
    var confirm = document.getElementById('confirmation');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log('test');
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode === 'auth/email-already-in-use'){
            confirm.innerHTML = ('This email is already in use.');
        }else if(errorCode === 'auth/invalid-email') {
            confirm.innerHTML = ('The email is invalid.');
        }else if(errorCode === 'auth/weak-password') {
            confirm.innerHTML = ('The password is too weak.');
        }else{
            alert(errorMessage);
        }
    });
    console.log("success");
    return false;
})
</script>
// <script
// src="https://code.jquery.com/jquery-3.3.1.min.js"
// integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
// crossorigin="anonymous">
//     </script>
//     <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
//     <script>
// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyC4RrZ1ZAvMGLaDhGCB1TCfm4WzgdZT1cI",
//     authDomain: "csc-4330.firebaseapp.com",
//     databaseURL: "https://csc-4330.firebaseio.com",
//     projectId: "csc-4330",
//     storageBucket: "csc-4330.appspot.com",
//     messagingSenderId: "549352708672"
// };
// firebase.initializeApp(config);
// </script>