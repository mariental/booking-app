import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQk4gjM3BDfLdK1RfIppI-Byohmyui-yw",
  authDomain: "booking-app-69b95.firebaseapp.com",
  projectId: "booking-app-69b95",
  storageBucket: "booking-app-69b95.appspot.com",
  messagingSenderId: "781342761054",
  appId: "1:781342761054:web:df9fb9e468d92b758ad4cf"
};

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}