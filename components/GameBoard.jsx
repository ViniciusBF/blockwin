/* eslint-disable no-unused-vars */
import { Avatar } from '@mantine/core';
import { useContext } from 'react';
import GameContext from '../context/game';
import styles from '../styles/gameboard.module.css';
import BettingBoard from './BettingBoard';
import Countdown from './Countdown';

const renderer = ({
  minutes, seconds, completed,
}) => {
  if (completed) {
    return (<span>Timeout!</span>);
  }
  return (
    <span>
      {minutes}
      :
      {seconds}
    </span>
  );
};

const GameBoard = () => {
  // const [jackpot, setJackpot] = useState(0);
  // const [round, setRound] = useState(0);
  // const [timer, setTimer] = useState(60000 * 15);
  const {
    game, amount, players, currentGameId,
  } = useContext(GameContext);

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div>
          <p>
            Round:
            {' '}
            {currentGameId}
          </p>
          <p className={styles.jackpot}>
            KLV
            {' '}
            {amount}
          </p>
          <div>
            players:
            {' '}
            {game.ticketQty}
          </div>
          <div
            style={{
              background: '#c2c2c2',
            }}
          >
            {players.length > 0 && (
            <Avatar.Group spacing="xl">
              {players.map((
                { avatar },
              ) => (
                <Avatar src={avatar} size="md" />
              ))}
            </Avatar.Group>
            )}
          </div>
        </div>
        {game.end && (
          <div className={styles.timer}>
            <Countdown time={game.end} />
          </div>
        )}
      </div>
      <BettingBoard />
    </div>
  );
};

export default GameBoard;
