import PropTypes from 'prop-types';
import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import klever from '../services/klever';
import AuthContext from './auth';

const defaultValue = {
  isConnected: false,
  isLoading: false,
  balance: 0,
  address: '',
  updateBalance: () => (0),
  buyTicket: () => (0),
  connectWallet: () => {},
  reset: () => {},
};

const WalletContext = createContext(defaultValue);

export const WalletProvider = ({ children }) => {
  const [address, setAddress] = useState(defaultValue.address);
  const [balance, setBalance] = useState(defaultValue.balance);
  const [isConnected, setIsConnected] = useState(defaultValue.isConnected);
  const [isLoading, setIsLoading] = useState(defaultValue.isLoading);
  const { getToken } = useContext(AuthContext);

  const connectWallet = async () => {
    setIsLoading(true);

    const accountAddress = await klever.connectWithSdk();

    setAddress(accountAddress);
    setIsLoading(false);
  };

  const updateBalance = async () => {
    if (address) {
      const accountBalance = await klever.balance();
      console.log(accountBalance);

      setBalance(accountBalance / 10 ** 6);
      setIsConnected(true);
    }

    return balance;
  };

  const buyTicket = async (gameId, numbers) => {
    const value = 1000;

    if (address && balance > value) {
      try {
        const { data: { txsHashes: [txHash] } } = await klever.send('klv1eus3npurhgj3qhqa88m9af3zed9t2uja94p5sjvkmj48y4tj2g0skgya5z', value * 10 ** 6);
        console.log('TRANSAÇÃO EFETUADA', txHash);

        const token = await getToken();
        console.log('TOKEN CONSEGUIDO');

        console.log({
          gameId,
          numbers,
          txHash,
          token,
        });

        try {
          await fetch('/api/game/add', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              gameId,
              numbers,
              txHash,
              token,
            }),
          });
        } catch (err) {
          console.log(err);
        }

        updateBalance();

        return 1;
      } catch (err) {
        console.log(err);
      }
    }

    return 0;
  };

  const reset = () => {
    setAddress(defaultValue.address);
    setBalance(defaultValue.balance);
  };

  useEffect(() => {
  }, []);

  useEffect(() => {
    updateBalance();
  }, [address]);

  const value = useMemo(() => ({
    isConnected,
    isLoading,
    address,
    balance,
    connectWallet,
    updateBalance,
    buyTicket,
    reset,
  }), [isConnected, isLoading, address, balance]);

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
