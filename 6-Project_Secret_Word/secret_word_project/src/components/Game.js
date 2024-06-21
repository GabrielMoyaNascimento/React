import './Game.css'
import {useState, useRef} from 'react'

const Game = ({verifyLetter, 
    pickedWord, 
    pickedCategory, 
    letters, 
    guessedLetter, 
    wrongLetters, 
    guesses, 
    score
}) => {
            
    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        verifyLetter(letter)
        setLetter('')
        letterInputRef.current.focus();
    }

    return (
        <div className="game">
            <p className="points">
                <span>Points: {score}</span>
            </p>
            <h1>Guess the word</h1>
            <h3 className="tip">
                Tip of the word: <span>{pickedCategory}</span>
            </h3>
            <p>You still have <span>{guesses}</span> tries</p>
            <div className="wordContainer">
                {letters.map((letter, index) => (
                    guessedLetter.includes(letter) ? (
                        <span key={index} className='letter'>{letter}</span>
                    ) : (
                        <span key={index} className='blankSquare'></span>
                    ))
                )}
            </div>
            <div className="letterContainer">
                <p>Try to guess the letter in the word:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='letter' maxLength="1" required
                        onChange={(e) => setLetter(e.target.value)} value={letter}
                        ref={letterInputRef}
                    />
                    <button type='submit'>Play!</button>
                </form>
                
            </div>
            <div className="wrongLettersContainer">
                <p>Wrong letters tried:</p>
                {wrongLetters.map((letter, index) => (
                    <span key={index}>{letter}, </span>
                ))}
            </div>
        </div>
    )
}

export default Game