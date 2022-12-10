import {
  ActionIcon,
  Avatar,
  Button,
  Group,
  NumberInput,
  Text,
} from '@mantine/core';
import { useContext } from 'react';
import { FaGoogle, FaRandom } from 'react-icons/fa';
import AuthContext from '../context/auth';
import removeDuplicates from '../utils/numbers';

const Home = () => {
  const {
    isSignedIn,
    user,
    signIn,
    signOut,
  } = useContext(AuthContext);

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
          ...user,
        }, null, 2)}
      </pre>
      <Group>
        <NumberInput
          hideControls
          parser={(value) => (
            removeDuplicates(value).replace(/^0| 0|[^\d]/g, '').slice(0, 12)
          )}
          formatter={(value) => (
            !Number.isNaN(value)
              ? String(value).replace(/[1-9]\d(?=\d)(?!$)/g, '$& ')
              : ''
          )}
          rightSection={(
            <ActionIcon
              variant="default"
              mr={10}
            >
              <FaRandom size={14} />
            </ActionIcon>
          )}
        />

      </Group>
    </div>
  );
};

export default Home;
