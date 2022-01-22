import { useState, useEffect, createContext } from "react";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  // signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();

export function firebaseLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function fireBaseSignUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function updateEmail(email) {
  return updateEmail(auth, email);
}

export function updatePassword(password) {
  return updatePassword(auth, password);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
