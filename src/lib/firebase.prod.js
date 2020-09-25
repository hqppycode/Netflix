import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

var firebaseConfig = {
  apiKey: "AIzaSyDsLHaE0_FZ90ruFxBbiJYNqbD5jlgpkaI",
  authDomain: "poketype-e2fc5.firebaseapp.com",
  databaseURL: "https://poketype-e2fc5.firebaseio.com",
  projectId: "poketype-e2fc5",
  storageBucket: "poketype-e2fc5.appspot.com",
  messagingSenderId: "256451842027",
  appId: "1:256451842027:web:40e472918755a87df0d3ae",
  measurementId: "G-Q4721CFDX4",
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };
