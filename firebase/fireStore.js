import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
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
