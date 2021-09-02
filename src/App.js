import { useState } from 'react';
import './App.css';
import { cards } from './model/data.js';
import { Card } from './components/card.js';
import { Results } from './components/result';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState('');

  function selectCardAndAttribute(card, attribute) {
    setSelectedCards([...selectedCards, card]);
    setSelectedAttribute(attribute);
  }

  return (
    <div className="App">
      <div class="flex-container">
        {cards.map(m => <Card card={m} cardSelected={(card, attribute) => selectCardAndAttribute(card, attribute)}></Card>)}
      </div>
      <div class="flex-container">
        <Results firstCard={selectedCards[0]} secondCard={selectedCards[1]} attribute={selectedAttribute}></Results>
      </div>
    </div>
  );
}

export default App;
