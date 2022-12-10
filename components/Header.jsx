import Link from 'next/link';
import { Menu } from '@mantine/core';
import { useContext } from 'react';
import styles from '../styles/header.module.css';
import WalletContext from '../context/wallet';
import AuthContext from '../context/auth';

const Header = () => {
  const { balance } = useContext(WalletContext);
  const { user } = useContext(AuthContext);

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
            <Menu.Label>Application</Menu.Label>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Messages</Menu.Item>
            <Menu.Item>Gallery</Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            {/* <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
            <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item> */}
          </Menu.Dropdown>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
