import React from 'react';
import GameScreen from '../../components/screens/gameScreen/index.js';
import { StoryRouter } from 'storybook-react-router';
import gameStatus from '../../constants/gameStatus.js';

const players = [
  {
    number: 1, 
    name: 'Player 1'}
];

export default {
  component: GameScreen,
  title: 'Screens/Game Screen',
  decorators: [storyFn => <StoryRouter story={storyFn}>{storyFn()}</StoryRouter>]
};

export const defaultGameScreen = () => (
  <GameScreen 
      status={gameStatus.STARTED}
      phrase="this is a test"
      players={players}
      withIntro={false} />
);

export const withIntro = () => (
  <GameScreen 
      status={gameStatus.STARTED}
      phrase="this is a test"
      players={players}
      withIntro={true} />
);

export const inProgress = () => (
  <GameScreen 
      status={gameStatus.STARTED}
      phrase="this is a test"
      players={players}
      guessedLetters={['e','s','u']}
      incorrectGuessCount={1}
      withIntro={false} />
);

export const gameLost = () => (
  <GameScreen 
      status={gameStatus.LOST}
      phrase="this is a test"
      players={players}
      guessedLetters={['e','s','u','x','y','z','c','f']}
      incorrectGuessCount={6}
      startDate={1570079129681}
      endDate={1570079147158}
      withIntro={false} />
);

export const gameWon = () => (
  <GameScreen 
      status={gameStatus.WON}
      phrase="this is a test"
      players={players}
      guessedLetters={['e','s','u','x','t','h','i','a']}
      incorrectGuessCount={2}
      startDate={1570079129681}
      endDate={1570079147158}
      withIntro={false} />
);