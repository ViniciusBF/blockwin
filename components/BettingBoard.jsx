import { useEffect, useState } from 'react';
import styles from '../styles/bettingBoard.module.css';

const INITIAL_BETS_STATE = ['empty', 'empty', 'empty'];

const BettingBoard = () => {
  const [bets, setBets] = useState(INITIAL_BETS_STATE);
  const [myBets, setMyBets] = useState([]);

  useEffect(() => {
  }, [bets, myBets]);

  const verifyStatusBets = (value) => {
    const betsStatus = bets.some((bet) => (bet === Number(value)));
    return betsStatus;
  };

  const handleResetBets = () => {
    setBets(INITIAL_BETS_STATE);
  };

  const removeBet = (value) => {
    if (value !== 'empty') {
      const data = [...bets];
      const indexValue = bets.indexOf(Number(value));
      data.splice(indexValue, 1, 'empty');
      setBets(data);
    }
  };

  const addNewBet = (value) => {
    const data = [...bets];
    const firstSlotEmpty = bets.indexOf('empty');
    data.splice(firstSlotEmpty, 1, Number(value));
    setBets(data);
  };

  const handleBets = ({ target }) => {
    const { name: value } = target;
    const betStatus = verifyStatusBets(value);
    if (betStatus) {
      removeBet(value);
    } else {
      addNewBet(value);
    }
  };

  const buttonGenerator = () => {
    const buttomNumbersArray = [...Array(20).keys()];
    const buttons = buttomNumbersArray.map((key) => (
      <button
        key={key + 1}
        name={key + 1}
        type="button"
        className={bets.includes(key + 1) ? (
          styles.buttonUsed
        ) : (
          styles.buttonNotUsed
        )}
        disabled={!bets.includes('empty') && !bets.includes(key + 1)}
        onClick={(e) => handleBets(e)}
      >
        {key + 1}
      </button>
    ));
    return buttons;
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftBoard}>
        { buttonGenerator() }
      </div>
      <div className={styles.rightBoard}>
        <div className={styles.betsRow}>
          <div>
            <button
              key="first-bet"
              name={bets[0]}
              type="button"
              onClick={({ target: { name } }) => removeBet(name)}
            >
              {bets[0]}
            </button>
            <button
              key="second-bet"
              name={bets[1]}
              type="button"
              onClick={({ target: { name } }) => removeBet(name)}
            >
              {bets[1]}
            </button>
            <button
              key="third-bet"
              name={bets[2]}
              type="button"
              onClick={({ target: { name } }) => removeBet(name)}
            >
              {bets[2]}
            </button>
          </div>
          <button
            key="clean-button"
            id="clean-button"
            type="button"
            onClick={() => handleResetBets()}
          >
            Limpar
          </button>
        </div>
        <div>
          { myBets.length > 0 ? (
            <>
              <h3>Minhas apostas:</h3>
              {myBets.map((bet, index) => (
                <p>{`Aposta 0${index + 1}: ${bet[0]}-${bet[1]}-${bet[2]}`}</p>
              ))}
            </>
          ) : (
            <p>Ainda não há apostas realizadas nesta rodada</p>
          )}
        </div>
        <div>
          <button
            key="buy-ticket"
            type="button"
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default BettingBoard;
