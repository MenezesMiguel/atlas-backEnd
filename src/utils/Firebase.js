const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.STORAGE_BUCKET,
    databaseURL: process.env.PROJECT_ID,
    storageBucket: process.env.MESSAGING_SENDER_ID,
    messagingSenderId: process.env.APP_ID
}