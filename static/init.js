// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// FirebaseUI config.
const uiConfig = {
    signInSuccessUrl: '/', //'<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
        window.location.assign('<your-privacy-policy-url>');
    }
};

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

function initApp() {
    firebase.auth().onAuthStateChanged(
        function(user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var uid = user.uid;
                var phoneNumber = user.phoneNumber;
                var providerData = user.providerData;
                user.getIdToken().then(function(accessToken) {
                    document.getElementById('sign-in-status').textContent =
                        'Signed in';
                    document.getElementById('sign-in').textContent = 'Sign out';
                    document.getElementById(
                        'account-details'
                    ).textContent = JSON.stringify(
                        {
                            displayName: displayName,
                            email: email,
                            emailVerified: emailVerified,
                            phoneNumber: phoneNumber,
                            photoURL: photoURL,
                            uid: uid,
                            accessToken: accessToken,
                            providerData: providerData
                        },
                        null,
                        '  '
                    );
                    document.getElementById('sign-in').addEventListener('click', function() {
                        firebase.auth().signOut();
                      });
                });
            } else {
                // User is signed out.
                document.getElementById('sign-in-status').textContent =
                    'Signed out';
                document.getElementById('sign-in').textContent = 'Sign in';
                document.getElementById('account-details').textContent = 'null';
            }
        },
        function(error) {
            console.log(error);
        }
    );
}

window.addEventListener('load', function() {
    initApp();
});
