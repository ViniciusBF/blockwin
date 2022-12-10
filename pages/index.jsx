import {
  Avatar,
  Button,
  Group,
  Text,
} from '@mantine/core';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import AuthContext from '../context/auth';
import WalletContext from '../context/wallet';

const Home = () => {
  const {
    isSignedIn,
    user,
    signIn,
    signOut,
  } = useContext(AuthContext);
  const { address, balance } = useContext(WalletContext);

  return (
    <div>
      <Button.Group>
        <Button onClick={signIn} leftIcon={<FaGoogle />} variant="default">
          Faz login aê
        </Button>
        <Button onClick={signOut} leftIcon={<FaGoogle />} variant="default">
          Que isso, mano, desfaz esse login pelo amor de deus
        </Button>
      </Button.Group>
      {isSignedIn && (
        <Group spacing="sm">
          <Avatar src={user.avatar} />
          <Text>{user.name}</Text>
        </Group>
      )}
      <pre>
        {JSON.stringify({
          address,
          balance,
          ...user,
        }, null, 2)}
      </pre>
    </div>
  );
};

export default Home;
