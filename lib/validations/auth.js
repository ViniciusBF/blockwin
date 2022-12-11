import { auth } from '../firebaseAdmin';

export const validateAuth = async (token) => {
  try {
    const data = await auth
      .verifyIdToken(token);

    return data;
  } catch (err) {
    throw new Error('');
  }
};

export default {
  validateAuth,
};
