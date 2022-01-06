import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  // signInWithPopup,
} from "firebase/auth";

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function updateEmail(email) {
  return currentUser.updateEmail(auth, email);
}

export function updatePassword(password) {
  return currentUser.updatePassword(auth, password);
}
