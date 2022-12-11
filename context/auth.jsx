import {
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut as signOutUser,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { auth } from '../services/firebase';
import setCookie from '../utils/cookies';
import WalletContext from './wallet';

const defaultValue = {
  isSignedIn: false,
  isLoading: true,
  user: {
    uid: '',
    name: '',
    email: '',
    avatar: '',
    data: {},
  },
  signIn: () => {},
  signOut: () => {},
  getToken: () => (''),
};

const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(defaultValue.isSignedIn);
  const [isLoading, setIsLoading] = useState(defaultValue.isLoading);
  const [user, setUser] = useState(defaultValue.user);
  const { connectWallet, reset } = useContext(WalletContext);
  const router = useRouter();

  const getToken = async () => {
    const token = await auth.currentUser?.getIdToken(true);

    if (!token) {
      throw new Error();
    }

    setCookie('token', token, 1);

    return token;
  };

  const signIn = async () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
  };

  const signOut = async () => {
    signOutUser(auth);
    reset();
    router.push('/');
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (userData) => {
      if (userData) {
        setUser({
          uid: userData.uid,
          name: userData.displayName,
          email: userData.email,
          avatar: userData.photoURL,
          data: userData,
        });

        console.log({
          token: await getToken(),
        });

        setIsSignedIn(true);
        setIsLoading(false);
        connectWallet();
      } else {
        setUser(defaultValue.user);

        setIsSignedIn(false);
        setIsLoading(false);
      }
    });
    getRedirectResult(auth);
  }, []);

  const value = useMemo(() => ({
    isSignedIn,
    isLoading,
    user,
    signIn,
    signOut,
    getToken,
  }), [isSignedIn, user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default AuthContext;
