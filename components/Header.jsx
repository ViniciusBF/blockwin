import Link from 'next/link';
import { Button, Menu } from '@mantine/core';
import { useContext } from 'react';
import styles from '../styles/header.module.css';
import WalletContext from '../context/wallet';
import AuthContext from '../context/auth';

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
            <img src={user.avatar} width={30} alt={user.name} />
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
