import {
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut as signOutUser,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { auth } from '../services/firebase';
import setCookie from '../utils/cookies';

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
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser({
          uid: userData.uid,
          name: userData.displayName,
          email: userData.email,
          avatar: userData.photoURL,
          data: userData,
        });

        setIsSignedIn(true);
        setIsLoading(false);
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
