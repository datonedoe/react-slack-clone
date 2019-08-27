import firebase from  'firebase/app'
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCDG6xSj5SIhMZQdp8L_Q84N6LO4EfVFkA",
    authDomain: "slack-react-clone-251106.firebaseapp.com",
    databaseURL: "https://slack-react-clone-251106.firebaseio.com",
    projectId: "slack-react-clone-251106",
    storageBucket: "slack-react-clone-251106.appspot.com",
    messagingSenderId: "646030018575",
    appId: "1:646030018575:web:12cd5f309fc97619"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;