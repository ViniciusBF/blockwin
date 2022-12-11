import admin from 'firebase-admin';
import { getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getDatabase } from 'firebase-admin/database';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT);

const initialize = () => {
  if (!getApps().length) {
    return initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://outhack-d999b-default-rtdb.firebaseio.com',
    });
  }

  return getApp();
};

export default admin;

export const auth = getAuth(initialize());
export const firestore = getFirestore(initialize());
export const database = getDatabase(initialize());
