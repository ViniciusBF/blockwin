import { Avatar, Button, Menu } from '@mantine/core';
import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../context/auth';
import WalletContext from '../context/wallet';
import styles from '../styles/header.module.css';

const Header = () => {
  const { balance } = useContext(WalletContext);
  const { user, signOut } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/logo.png" width={100} alt="brand" />
      </Link>
      <div>
        <div>
          <p>KLV BALANCE</p>
          <p>{balance}</p>
        </div>
        <Menu shadow="md">
          <Menu.Target>
            <Avatar src={user.avatar} />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <Button onClick={signOut} variant="default">Logout</Button>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
