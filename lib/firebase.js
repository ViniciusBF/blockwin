import admin from 'firebase-admin';
import { getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

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
