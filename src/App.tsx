import { useState } from 'react'
import iconDice from './assets/icon-dice.svg';
import './App.css'

type advice = {
    id?: number;
    advice?: string;
}

function App() {
  const [advice, setAdvice] = useState<advice>({});

  return (
    <>
      <div className="bg">
          <div className="card">
              <div className="card-title">Advice #117</div>
              <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ex!</div>
              <div className="card-separator"></div>
              <button className="card-btn">
                  <img src={iconDice} alt=""/>
              </button>
          </div>
      </div>
    </>
  )
}

export default App
