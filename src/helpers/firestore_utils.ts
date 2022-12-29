// import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { userData } from "../model/userData";
import { auth, db } from "./firebase_utils";

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Firebase Firestore database helper
 */
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// Get the details of current user from firebase firestore
export async function getUserData() {
  const oneUpload = doc(db, "users", `${auth.currentUser?.uid}`);
  const oneSnap = await getDoc(oneUpload);

  return oneSnap.data();
}

// save or update the current user data in firebase firestore
export async function saveUserData(orgName: string) {
  // It is important to have atleast one organization

  const currentUserDoc = doc(db, "users", `${auth.currentUser?.uid}`);

  const newOrgId = await createNewOrganization(orgName);

  const userData: userData = {
    name: `${auth.currentUser?.displayName}`,
    email: `${auth.currentUser?.email}`,
    organizations: [{ id: newOrgId, name: orgName, pages: [] }],
  };

  return setDoc(currentUserDoc, userData);
}

// save organization
async function createNewOrganization(orgName: string) {
  const pageCollection = collection(db, "organizations");
  var orgSnapshort = await addDoc(pageCollection, { name: orgName });

  return orgSnapshort.id;
}

// get the organization by id
export async function getOrganizationById(orgId: string) {
  const organizationDoc = doc(db, "organizations", orgId);
  const organizationSnapshot = await getDoc(organizationDoc);

  return organizationSnapshot.data();
}

// get all docs in a collection
export async function getAllDocs() {
  const collectionRef = collection(db, "collectionName");
  const collectionSnapshot = await getDocs(collectionRef);
  const docList = collectionSnapshot.docs.map((doc) => doc.data());
  return docList;
}

export type Converter<T> = {
  toFirestore: (model: T) => any;
  fromFirestore: (snapshot: any, options: any) => T;
};

// Create the page using pageName and OrgId
export async function createPage(pageName: string, orgId: string) {
  const pageCollection = collection(db, "organizations", orgId, "pages");
  var pageSnapShot = await addDoc(pageCollection, { name: pageName });

  return pageSnapShot.id;
}
