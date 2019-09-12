import React from 'react';
import { storiesOf } from '@storybook/react';
import Diagram from '../src/components/screens/gameScreen/diagram.js';
import Phrase from '../src/components/screens/gameScreen/phrase.js';
import Keyboard from '../src/components/screens/gameScreen/keyboard.js';
import GameScreen from '../src/components/screens/gameScreen/index.js';

storiesOf('Screens/Game Screen/Diagram', module)
  .add('Default', () => (
    <Diagram />
  ))
  .add('With Intro', () => (
    <Diagram withIntro={true}/>
  ))
  .add('One Incorrect Guess', () => (
    <Diagram incorrectGuessCount={1} />
  ))
  .add('Two Incorrect Guesses', () => (
    <Diagram incorrectGuessCount={2} />
  ))
  .add('Three Incorrect Guesses', () => (
    <Diagram incorrectGuessCount={3} />
  ))
  .add('Four Incorrect Guesses', () => (
    <Diagram incorrectGuessCount={4} />
  ))
  .add('Five Incorrect Guesses', () => (
    <Diagram incorrectGuessCount={5} />
  ))
  .add('Six Incorrect Guesses (Game Over)', () => (
    <Diagram incorrectGuessCount={6} />
  ))

storiesOf('Screens/Game Screen/Phrase', module)
  .add('Default', () => (
    <Phrase phrase="this is a test" />
  ))
  .add('Letters Guessed', () => (
    <Phrase phrase="this is a test" guessedLetters={['e','s','u']}/>
  ))
  .add('With Intro', () => (
    <Phrase phrase="this is a test" withIntro={true}/>
  ))
  .add('Medium-Length Phrase', () => (
    <Phrase phrase="this is a medium length test" />
  ))
  .add('Medium-Length Word', () => (
    <Phrase phrase="this is abcdefghijk test" />
  ))
  .add('Long-Length Phrase', () => (
    <Phrase phrase="this is a long length test one two three" />
  ))
  .add('Long-Length Word', () => (
    <Phrase phrase="this is abcdefghijklmnop" />
  ));

storiesOf('Screens/Game Screen/Keyboard', module)
  .add('Default', () => (
    <Keyboard />
  ))
  .add('Letters Guessed', () => (
    <Keyboard guessedLetters={['e','s','u']}/>
  ));

storiesOf('Screens/Game Screen', module)
  .add('Default', () => (
    <GameScreen 
      phrase="this is a test"
      withIntro={false} />
  ))
  .add('With Intro', () => (
    <GameScreen 
      phrase="this is a test"
      withIntro={true} />
  ))
  .add('In Progress', () => (
    <GameScreen 
      phrase="this is a test" 
      guessedLetters={['e','s','u']}
      incorrectGuessCount={1}
      withIntro={false} />
  ))
  .add('Game Lost', () => (
    <GameScreen 
      phrase="this is a test" 
      guessedLetters={['e','s','u','x','y','z','c','f']}
      incorrectGuessCount={6}
      withIntro={false} />
  ))
  .add('Game Won', () => (
    <GameScreen 
      phrase="this is a test" 
      guessedLetters={['e','s','u','x','t','h','i','a']}
      incorrectGuessCount={2}
      withIntro={false} />
  ));