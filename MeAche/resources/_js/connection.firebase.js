// Initialize Firebase
const firebaseConfig  = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId"
};
// Initialize your Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

function getReference() {
  return database = firebase.database();
}
