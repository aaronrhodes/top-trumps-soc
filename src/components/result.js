import { Card } from "./card";

export function Results({ firstCard, secondCard, attribute }) {

    let winningCard = null;

    if (firstCard && secondCard) {
        winningCard = firstCard.attributes[attribute] > secondCard.attributes[attribute]
            ? firstCard : secondCard;
    }

    return <div>
        {winningCard ?
            <Card card={winningCard}></Card>
            : "Please select two cards"
        }
    </div>
}