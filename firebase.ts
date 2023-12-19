import {initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";
import {getAuth, connectAuthEmulator} from "firebase/auth";
import {getAnalytics, setUserProperties} from "firebase/analytics";

//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLuN6WJ_PUNaydUbg2WPiB8IAbOETi934",
    authDomain: "jelly-e1b63.firebaseapp.com",
    projectId: "jelly-e1b63",
    storageBucket: "jelly-e1b63.appspot.com",
    messagingSenderId: "1098022312406",
    appId: "1:1098022312406:web:b96ad5791f508d14daec77",
    measurementId: "G-7YTVW1ZSZB"
};

const USE_FIREBASE_EMULATORS = false;

export const app = initializeApp(firebaseConfig);
const secondaryFbApp = initializeApp(firebaseConfig, "Secondary");
export const auth = getAuth(app);
export const secondaryAuth = getAuth(secondaryFbApp);

if (USE_FIREBASE_EMULATORS) {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectAuthEmulator(secondaryAuth, "http://localhost:9099");
}

export const db = (() => {
    const db = getFirestore();
    if (USE_FIREBASE_EMULATORS)
        connectFirestoreEmulator(db, 'localhost', 8080);
    return db;
})();

const analytics = getAnalytics();
setUserProperties(analytics, {
    platform: 'web'
});
