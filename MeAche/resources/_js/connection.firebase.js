// Initialize Firebase
const firebaseConfig  = {
  apiKey: "AIzaSyA8fBbF_xn3q33YdNWY2oDCQ3D9QpNFPO4",
  authDomain: "me-ache-6c62e.firebaseapp.com",
  databaseURL: "https://me-ache-6c62e.firebaseio.com",
  projectId: "me-ache-6c62e",
  storageBucket: "me-ache-6c62e.appspot.com",
  messagingSenderId: "164197814660"
};
// Initialize your Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

function getReference() {
  // [START rtdb_get_reference]
  return database = firebase.database();
  // [END rtdb_get_reference]
}
