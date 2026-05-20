import {
  signInAnonymously,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { auth } from "./firebase.js";

import { state } from "./state.js";

export async function initializeAuth(app) {
  return new Promise(async (resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        state.user = user;

        resolve(user);
      } else {
        try {
          await signInAnonymously(auth);
        } catch (error) {
          console.error(error);

          app.showToast("Erro na autenticação");
        }
      }
    });
  });
}
