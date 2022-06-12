import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const db = getFirestore();

/**
 *
 * @param {*} collection collection name
 * @param {*} data data to be saved in collection
 */
export async function addDocument(collectionName, data) {
  await addDoc(collection(db, collectionName), data);
}

export async function addDocManual(collectionName, ref, data) {
  console.log(collectionName, ref, data);
  await setDoc(doc(db, collectionName, ref), data);
}

export async function getDocQuery(collectionName, queryDefinition) {
  const ref = collection(db, collectionName);
  // Create a query against the collection.
  let q = query(
    ref,
    where(queryDefinition.key, queryDefinition.q, queryDefinition.val)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    return doc.data();
  })[0];
}

export async function getCollection(collectionName) {
  let q = await collection(db, collectionName);

  const querySnapshot = await getDocs(q);
  let arr = [];
  querySnapshot.forEach((doc) => {
    arr.push({ ...doc.data(), id: doc.id });
  });
  return arr;
}

export async function createSubCollection(userDocId, groupDocId) {
  // console.log({ userDocId, groupDocId });
  const docRef = doc(db, "users", userDocId);
  return await addDoc(collection(db, "groups", groupDocId, "members"), {
    name: docRef,
  });
}

export async function getSubCollection(groupDocId, subGroup) {
  var query = await collection(db, groupDocId).where("field", "==", "1");

  const subs = [];

  query.get().then((querySnapshot) => {
    querySnapshot.forEach((document) => {
      document.ref
        .collection(subGroup)
        .get()
        .then((querySnapshot) => {
          subs.push(querySnapshot);
        });
    });
  });
  console.log(subs);
  return subs;
}

export async function getOneCollection(collectionName, groupDocId) {
  await getDoc(doc(db, collectionName, groupDocId));
  console.log(collectionName, groupDocId);
}
