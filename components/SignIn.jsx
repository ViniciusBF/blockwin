import {
  Button, Text,
} from '@mantine/core';
import { Cairo_Play as CairoPlay } from '@next/font/google';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../context/auth';
import styles from '../styles/home.module.css';

const cairoPlay = CairoPlay({
  subsets: ['latin'],
});

const SignIn = () => {
  const { isLoading, isSignedIn, signIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/game');
    }
  }, [isSignedIn, router]);

  return (
    <div className={styles.container}>
      <Text sx={{
        ...cairoPlay.style,
        fontWeight: 700,
        fontSize: '4rem',
      }}
      >
        BlockWin
      </Text>
      <Button
        onClick={signIn}
        variant="outline"
        leftIcon={<FcGoogle />}
        loading={isLoading}
        size="md"
      >
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
