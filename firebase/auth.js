import { useEffect, createContext } from "react";
import { auth } from ".";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { getDocQuery } from "../firebase/fireStore";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/account";

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
  const { user } = useSelector((state) => {
    return state.account;
  });
  const dispatch = useDispatch();

  const handleSetCurrentUser = async (currentUser) => {
    if (currentUser && currentUser.email) {
      console.log({ currentUser });
      let userDoc = await getDocQuery("users", {
        key: "email",
        q: "==",
        val: currentUser.email,
      });
      dispatch(
        setUser({ uid: currentUser.uid, email: currentUser.email, ...userDoc })
      );
    }

  };

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => handleSetCurrentUser(user));
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
