import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { db } from "./firebase.js";

import { state } from "./state.js";

const COLLECTION = "transactions";

export async function addTransaction(data) {
  const userId = state.user.uid;

  await addDoc(
    collection(db, "users", userId, COLLECTION),

    {
      ...data,

      createdAt: Date.now(),
    },
  );
}

export async function loadTransactions() {
  const userId = state.user.uid;

  const q = query(
    collection(db, "users", userId, COLLECTION),

    where("year", "==", state.selectedYear),

    where("month", "==", state.selectedMonth),
  );

  const snapshot = await getDocs(q);

  state.transactions = snapshot.docs.map((docItem) => ({
    id: docItem.id,

    ...docItem.data(),
  }));

  return state.transactions;
}

export async function removeTransaction(id) {
  const userId = state.user.uid;

  await deleteDoc(doc(db, "users", userId, COLLECTION, id));
}

export async function editTransaction(id, data) {
  const userId = state.user.uid;

  await updateDoc(
    doc(db, "users", userId, COLLECTION, id),

    data,
  );
}
