import {
  Button, Group, Overlay, Stack,
} from '@mantine/core';
import { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import GameContext from '../context/game';
import WalletContext from '../context/wallet';
import styles from '../styles/bettingBoard.module.css';

const INITIAL_BETS_STATE = ['00', '00', '00'];

const BettingBoard = () => {
  const [bets, setBets] = useState(INITIAL_BETS_STATE);
  // const [myBets] = useState([]);
  const { currentGameId } = useContext(GameContext);
  const {
    isConnected, isLoading, connectWallet, buyTicket,
  } = useContext(WalletContext);

  const verifyStatusBets = (value) => {
    const betsStatus = bets.some((bet) => (bet === Number(value)));
    return betsStatus;
  };

  const handleResetBets = () => {
    setBets(INITIAL_BETS_STATE);
  };

  const removeBet = (value) => {
    if (value !== '00') {
      const data = [...bets];
      const indexValue = bets.indexOf(Number(value));

      data.splice(indexValue, 1, '00');

      setBets(data);
    }
  };

  const addNewBet = (value) => {
    const data = [...bets];
    const firstSlotEmpty = bets.indexOf('00');

    data.splice(firstSlotEmpty, 1, Number(value));

    setBets(data);
  };

  const handleBets = (value) => {
    const betStatus = verifyStatusBets(value);

    if (betStatus) {
      removeBet(value);
    } else {
      addNewBet(value);
    }
  };

  const buttonGenerator = () => {
    const buttonNumbersArray = [...Array(20).keys()];

    const buttons = buttonNumbersArray.map((key) => (
      <Button
        key={key + 1}
        id={key + 1}
        type="button"
        variant={bets.includes(key + 1) ? 'filled' : 'default'}
        disabled={!bets.includes('00') && !bets.includes(key + 1)}
        onClick={() => handleBets(key + 1)}
        sx={(theme) => ({
          fontFamily: theme.fontFamilyMonospace,
        })}
      >
        {`0${key + 1}`.slice(-2)}
      </Button>
    ));

    return buttons;
  };

  return (
    <Group
      style={{
        position: 'relative',
      }}
      position="apart"

    >
      <div className={styles.leftBoard}>
        { buttonGenerator() }
      </div>
      {/* <Stack justify="space-between" h="100%" w="35%"> */}
      {/* <ScrollArea
          sx={{
            height: '5rem',
          }}
        >
          { myBets.length > 0 && (
            <>
              <h3>My bets:</h3>
              {myBets.map((bet, index) => (
                <p>{`Aposta 0${index + 1}: ${bet[0]}-${bet[1]}-${bet[2]}`}</p>
              ))}
            </>
          )}
        </ScrollArea> */}
      <Stack>
        <Button.Group>
          {bets.map((bet, index) => (
            <Button
              sx={(theme) => ({
                fontFamily: theme.fontFamilyMonospace,
              })}
              key={index}
              type="button"
              variant="default"
              onClick={() => removeBet(bet)}
            >
              {`0${bet}`.slice(-2)}
            </Button>
          ))}
          <Button
            id="clean-button"
            type="button"
            onClick={() => handleResetBets()}
          >
            <FaTimes />
          </Button>
        </Button.Group>
        <Button
          disabled={bets.includes('00')}
          type="button"
          w="100%"
          onClick={() => {
            buyTicket(currentGameId, bets);
          }}
        >
          Buy ticket
        </Button>
      </Stack>
      {/* </Stack> */}
      { !isConnected && (
        <>
          <Overlay
            blur={1}
            zIndex={49}
            opacity={0.5}
          />
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50,
            }}
          >
            <Button
              onClick={connectWallet}
              loading={isLoading}
            >
              Conect wallet
            </Button>
          </div>
        </>
      )}
    </Group>
  );
};

export default BettingBoard;
