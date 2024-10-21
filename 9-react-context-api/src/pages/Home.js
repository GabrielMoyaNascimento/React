import {useContext} from 'react'

import {CounterContext} from '../context/CounterContext'

function Home() {
    const {counter} = useContext(CounterContext);
  return (
    <div>Home
        <p>Counter: {counter}</p>
    </div>
  )
}

export default Home