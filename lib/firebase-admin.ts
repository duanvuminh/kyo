import * as admin from "firebase-admin";
import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_PRIVATE_KEY || "");
if (admin.apps.length == 0)
  initializeApp({
    credential: cert(serviceAccount),
  });

export const db = getFirestore();
