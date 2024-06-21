import "./StartScreen.css"

const StartScreen = ({startGame}) => {
    return (
        <div className="start-screen">
            <h1>Secret Word</h1>
            <p>Click the button to start new game</p>
            <button onClick={startGame}>Start New Game</button>
        </div>
    )
}

export default StartScreen