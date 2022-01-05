import * as firebase from "firebase";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAx-vlkz92Ya-vmY8-yGGy0VINUYc9whvI",
//   authDomain: "ecommerce-225c8.firebaseapp.com",
//   databaseURL: "https://ecommerce-225c8.firebaseio.com",
//   projectId: "ecommerce-225c8",
//   storageBucket: "ecommerce-225c8.appspot.com",
//   messagingSenderId: "593746841585",
//   appId: "1:593746841585:web:f0090fc9296a27f7c67e50",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAx-vlkz92Ya-vmY8-yGGy0VINUYc9whvI",
  authDomain: "react-ecommerce-40fde.firebaseapp.com",
  databaseURL: "https://react-ecommerce-40fde.firebaseio.com",
  projectId: "react-ecommerce-40fde",
  storageBucket: "react-ecommerce-40fde.appspot.com",
  messagingSenderId: "26818460231",
  appId: "1:26818460231:web:dc189eea35115c234ccf62",
  measurementId: "G-J1511E0CBK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
