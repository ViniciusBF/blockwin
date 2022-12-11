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
  currentGameId: '',
};

const GameContext = createContext(defaultValue);

export const GameProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(defaultValue.isLoading);
  const [game, setGame] = useState(defaultValue.game);
  const [currentGameId, setCurrentGameId] = useState(defaultValue.currentGameId);
  const { isSignedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isSignedIn) {
      setIsLoading(false);

      getCurrentGame(({ gameId, ...data }) => {
        setGame(data);
        setCurrentGameId(gameId);
      });
    }
  }, [isSignedIn]);

  const value = useMemo(() => ({
    isLoading,
    game,
    currentGameId,
  }), [isLoading, game, currentGameId]);

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
