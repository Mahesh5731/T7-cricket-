// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, get, child, update } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3jtDhm05S5K0roXblLQGKIylSAVx9JYQ",
  authDomain: "t11-tournament-ae5ee.firebaseapp.com",
  databaseURL: "https://t11-tournament-ae5ee-default-rtdb.firebaseio.com",
  projectId: "t11-tournament-ae5ee",
  storageBucket: "t11-tournament-ae5ee.firebasestorage.app",
  messagingSenderId: "519878046157",
  appId: "1:519878046157:web:99a35137b2ddc9897f1484",
  measurementId: "G-Q3175V9SV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export database for use in other modules
export { database, ref, set, get, child, update };
