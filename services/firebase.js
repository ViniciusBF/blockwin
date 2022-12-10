import { getAnalytics, isSupported } from 'firebase/analytics';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getPerformance } from 'firebase/performance';

const isClient = typeof window !== 'undefined';

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

const initialize = () => {
  if (!isClient) {
    return null;
  }

  if (!getApps().length) {
    const app = initializeApp(firebaseConfig);

    getPerformance(app);

    return app;
  }

  return getApp();
};

export default initialize;

export const analytics = isClient && isSupported() ? getAnalytics(initialize()) : () => {};
export const auth = isClient ? getAuth(initialize()) : () => {};
export const database = isClient ? getDatabase(initialize()) : () => {};
export const perf = isClient ? getPerformance(initialize()) : () => {};
