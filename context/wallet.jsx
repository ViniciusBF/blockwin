import PropTypes from 'prop-types';
import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import klever from '../services/klever';

const defaultValue = {
  isConnected: false,
  balance: 0,
  address: '',
  updateBalance: () => (0),
};

const WalletContext = createContext(defaultValue);

export const WalletProvider = ({ children }) => {
  const [address, setAddress] = useState(defaultValue.address);
  const [balance, setBalance] = useState(defaultValue.balance);

  const updateBalance = async () => {
    if (address) {
      const accountBalance = await klever.balance();

      setBalance(accountBalance / 10 ** 6);
    }

    return balance;
  };

  const buyTicket = async () => {
    const value = 1000000;

    if (address || balance < value) {
      try {
        const res = await klever.send('klv1eus3npurhgj3qhqa88m9af3zed9t2uja94p5sjvkmj48y4tj2g0skgya5z', value * 10 ** 6);

        console.log(res);

        updateBalance();

        return 1;
      } catch (err) {
        console.log(err);
      }
    }

    return 0;
  };

  // useEffect(() => {
  //   const connect = async () => {
  //     const accountAddress = await klever.connectWithSdk();

  //     setAddress(accountAddress);
  //   };

  //   connect();
  // }, []);

  const connectWallet = async () => {
    const accountAddress = await klever.connectWithSdk();
    setAddress(accountAddress);
  };

  useEffect(() => {
    updateBalance();
  }, [address]);

  const value = useMemo(() => ({
    address,
    balance,
    updateBalance,
    buyTicket,
    connectWallet,
  }), [address, balance]);

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

WalletProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default WalletContext;
