/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDcpuaqjQNZ_x-hBsMWdHePA6OLcrDxIhI",
  authDomain: "friendlychat-6d82e.firebaseapp.com",
  projectId: "friendlychat-6d82e",
  storageBucket: "friendlychat-6d82e.appspot.com",
  messagingSenderId: "784841749981",
  appId: "1:784841749981:web:cca50930f65f2d7f77b234"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}