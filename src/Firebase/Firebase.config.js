
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOAbLOd-7V57gaYCxRHq_2tur0yFPYgUA",
  authDomain: "ibos-job-task.firebaseapp.com",
  projectId: "ibos-job-task",
  storageBucket: "ibos-job-task.appspot.com",
  messagingSenderId: "578878130719",
  appId: "1:578878130719:web:9c7b9d4b24ac2857ea632a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth