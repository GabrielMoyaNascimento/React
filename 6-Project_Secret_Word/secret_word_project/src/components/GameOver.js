import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>Game Over</h1>
    <h2>You scored <span>{score}</span> points</h2>
    <button onClick={retry}>Restart Game</button>
    </div>  )
}

export default GameOver