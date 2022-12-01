import {initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";
import {getAuth, connectAuthEmulator} from "firebase/auth";
import {getAnalytics, setUserProperties} from "firebase/analytics";

//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_mOwsGifO6yOlelFdIbCraVs62bz0ha0",
    authDomain: "daysofjelly.firebaseapp.com",
    projectId: "daysofjelly",
    storageBucket: "daysofjelly.appspot.com",
    messagingSenderId: "531136390454",
    appId: "1:531136390454:web:a53846f62d12a35c9b7f97",
    measurementId: "G-FYCWD0ZMN1"
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
