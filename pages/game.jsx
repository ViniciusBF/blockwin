import GameBoard from '../components/GameBoard';
import Header from '../components/Header';
import { GameProvider } from '../context/game';

const Game = () => (
  <div>
    <Header />
    <GameProvider>
      <GameBoard />
    </GameProvider>
  </div>
);

export default Game;
