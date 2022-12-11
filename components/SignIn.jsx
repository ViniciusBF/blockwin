import {
  Button, LoadingOverlay,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../context/auth';
import styles from '../styles/home.module.css';

const SignIn = () => {
  const { isLoading, isSignedIn, signIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/game');
    }
  }, [isSignedIn]);

  return (
    <div className={styles.container}>
      <h1>Frase bem legal</h1>
      <Button.Group>
        <Button
          onClick={signIn}
          variant="outline"
          leftIcon={<FcGoogle />}
        >
          Sign In
        </Button>
      </Button.Group>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
    </div>
  );
};

export default SignIn;
