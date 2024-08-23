import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import paper from "./assets/paper.svg"
import rock from "./assets/rock.svg"
import scissors from "./assets/scissors.svg"

const choices = [
  {
    url: paper,
    id: 0,
    winItemIds: [1],
    name: "paper",
  },
  {
    url: rock,
    id: 1,
    winItemIds: [2],
    name: "rock",
  },
  {
    url: scissors,
    id: 2,
    winItemIds: [0],
    name: "scissors",
  },
]

function App() {
  const [result, setResult] = useState("N/A");
  const [personalItem, setPersonalItem] = useState(null);
  const [AIItem, setAIItem] = useState(null);

  const randomForAI = () => {
    return choices[Math.floor(Math.random() * choices.length)]
  }

  const whoIsWinner = (personal, ai) => {
    if (personal.id === ai.id) {
      return "DRAW!";
    } else if (personal.winItemIds.includes(ai.id)) {
      return "VICTORY!";
    } else {
      return "FAILED!";
    }
  }

  const selectAction = (selection) => {
    const ai = randomForAI();
    const result = whoIsWinner(selection, ai);

    setPersonalItem(selection);
    setAIItem(ai);
    setResult(result)
  }
  return (
    <>
      <div className="versus">
        <div>
          <h2 className="selection">{personalItem?.name}</h2>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <h3>You</h3>
        </div>
        <div className="AI">
          <h2 className="selection">{AIItem?.name}</h2>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h3>AI</h3>
        </div>
      </div>
      <h1 className="result">{result}</h1>
      <h1>Click to Select</h1>
      <div className="selectCont">
        {choices.map((selection) => (
          <button key={selection.name} className="select" onClick={() => selectAction(selection)}>
            <img src={selection.url} alt={selection.name} />
          </button>
        ))}
      </div>
    </>
  )
}

export default App
