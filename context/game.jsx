import PropTypes from 'prop-types';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getCurrentGame } from '../services/game';
import AuthContext from './auth';

const defaultValue = {
  isLoading: true,
  game: {},
  amount: 0,
  players: [],
  currentGameId: '',
};

const GameContext = createContext(defaultValue);

export const GameProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(defaultValue.isLoading);
  const [game, setGame] = useState(defaultValue.game);
  const [amount, setAmount] = useState(defaultValue.amount);
  const [players, setPlayers] = useState(defaultValue.players);
  const [currentGameId, setCurrentGameId] = useState(defaultValue.currentGameId);
  const { isSignedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isSignedIn) {
      setIsLoading(false);

      getCurrentGame(({
        gameId,
        pool,
        players: playerData,
        ...data
      }) => {
        const avatars = playerData
          ? Object.entries(playerData).map(([, { avatar }]) => ({ avatar }))
          : [];

        setPlayers(avatars);
        setGame(data);
        setAmount(pool);
        setCurrentGameId(gameId);
      });
    }
  }, [isSignedIn]);

  const value = useMemo(() => ({
    isLoading,
    game,
    amount,
    players,
    currentGameId,
  }), [isLoading, game, amount, players, currentGameId]);

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default GameContext;
