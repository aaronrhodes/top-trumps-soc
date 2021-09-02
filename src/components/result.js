import { Card } from "./card";

export function Results({ firstCard, secondCard, attribute }) {

    let winningCard = null;

    if (firstCard && secondCard) {
        winningCard = firstCard.attributes[attribute] > secondCard.attributes[attribute]
            ? firstCard : secondCard;
    }

    return winningCard ?
        <div>
            <h2>Winner!</h2>
            <p>Comparing: {attribute}</p>
            <p>Loser: {winningCard === firstCard ? secondCard.name : firstCard.name}</p>
            <Card isSelected={true} card={winningCard}></Card>
        </div>
        : <div>Please select two cards</div>;
}