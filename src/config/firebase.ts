// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGc2T5Kpe7gK8PPmvBNHlNP8olRW8NO30",
    authDomain: "mithu-store.firebaseapp.com",
    projectId: "mithu-store",
    storageBucket: "mithu-store.appspot.com",
    messagingSenderId: "445685897919",
    appId: "1:445685897919:web:a665817de842ef05ddc40a",
    measurementId: "G-23SS7VC1DM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);