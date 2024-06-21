//CSS
import './App.css';

//React
import { useCallback, useEffect, useState} from 'react';

//Data
import {WordList} from './data/words.js';

//Components
import StartScreen from './components/StarScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(WordList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetter, setGuessedLetter] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const guessesQty = 3;

  //Picked a random word
  const pickWordAndCategory = useCallback(() => {
    //Pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)];

    //Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return {word, category};
    
  }, [words]);

  // Starts the game
  const startGame = useCallback(() => {
    //clear all letters
    clearLetterStates();

    //pick word and category
    const {word, category} = pickWordAndCategory();
    let wordLetters = word.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //Fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGuesses(guessesQty);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  //Process the letters
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();


    // check if the letter has already been utilized
    if (guessedLetter.includes(normalizedLetter) 
        || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    //push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetter((prevGuessedLetter) => [...prevGuessedLetter, normalizedLetter]);
    } 
    else {
      setWrongLetters((prevWrongLetters) => [...prevWrongLetters, normalizedLetter]);
      setGuesses((prevGuesses) => prevGuesses - 1);
    }

    //check if the player won
    if (guessedLetter.length === letters.length) {
      setGameStage(stages[2].name);
      setScore((prevScore) => prevScore + 100);
    }
    
  }

  const clearLetterStates = () => {
    setGuessedLetter([]);
    setWrongLetters([]);
  }

  //Check if win
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    //win condition
    if (guessedLetter.length === uniqueLetters.length) {
      //add score
      setScore((prevScore) => prevScore + 100);

      //restart game with new word
      startGame();
    }
  }, [guessedLetter, letters,startGame]);

  //Check if guesses ended
  useEffect(() => {
    //check if the player lost
    if (guesses <= 0) {
      //reset all states
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //restart the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }


  return (
    <div className="App">
     {gameStage === 'start' && <StartScreen startGame={startGame}/>}

     {gameStage === 'game' && <Game verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters} 
          guessedLetter={guessedLetter} 
          wrongLetters={wrongLetters} 
          guesses={guesses} 
          score={score}/>}

     {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
