import {
  Button,
} from '@mantine/core';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../context/auth';
import WalletContext from '../context/wallet';
import styles from '../styles/home.module.css';

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const { address } = useContext(WalletContext);
  const Router = useRouter();

  useEffect(() => {
    if (address) {
      Router.push('/game');
    }
  }, [address]);

  return (
    <div className={styles.container}>
      <h1>Frase bem legal</h1>
      <Button.Group>
        <Button
          onClick={signIn}
          variant="gradient"
          gradient={{
            from: 'teal',
            to: 'blue',
            deg: 60,
          }}
        >
          <img src="/google.svg" alt="google" width={30} />
          Sign In
        </Button>
      </Button.Group>
    </div>
  );
};

export default SignIn;
