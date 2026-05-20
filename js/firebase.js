import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhMdTKsxcF9aqpYo3JG7VPLR-06rB9HtM",
  authDomain: "appfinanceiroweb-2117c.firebaseapp.com",
  projectId: "appfinanceiroweb-2117c",
  storageBucket: "appfinanceiroweb-2117c.firebasestorage.app",
  messagingSenderId: "565278207321",
  appId: "1:565278207321:web:c5211b2fda922b02097048",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp);
