import { useState } from 'react';
import './App.css';
import { cards } from './model/data.js';
import { Card } from './components/card.js';
import { Results } from './components/result';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState('');

  function selectCardAndAttribute(card, attribute) {
    let newCards = [...selectedCards];

    // only allow two cards to be selected at any time
    if (newCards.length >= 2) {
      // grab the last selected card and make it the only one
      newCards = [selectedCards[selectedCards.length - 1]];
    }

    // check the card isn't already selected
    if (card !== newCards[0]) {
      // add the new card to the list
      newCards.push(card);

      // save!
      setSelectedCards(newCards);
      setSelectedAttribute(attribute);
    }
  }

  return (
    <div className="App">
      <div class="flex-container">
        {cards.map(m => <Card card={m} isSelected={selectedCards.indexOf(m) > -1} cardSelected={(card, attribute) => selectCardAndAttribute(card, attribute)}></Card>)}
      </div>
      <div class="flex-container">
        <button onClick={() => setSelectedCards([])}>Clear selected cards</button>
      </div>
      <div class="flex-container">
        <Results firstCard={selectedCards[0]} secondCard={selectedCards[1]} attribute={selectedAttribute}></Results>
      </div>
    </div >
  );
}

export default App;
