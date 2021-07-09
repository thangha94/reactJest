import { useState } from 'react';
import './App.css';
import Control from './components/Control';
import Display from './components/Display';

function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  const scoreStrikes = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const scoreBalls = () => {
    if (balls === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setBalls(balls + 1)
    }
  }
  const scoreFoul = () => {
    if (strikes !== 2) {
      setStrikes(strikes + 1)
    }
  }
  const scoreHit = () => {
    setStrikes(0)
    setBalls(0)
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Control strike={scoreStrikes} ball={scoreBalls} foul={scoreFoul} hit={scoreHit} />
    </div>
  );
}

export default App;
