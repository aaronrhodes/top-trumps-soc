import React from 'react';

export function Card({ card, cardSelected, isSelected }) {

    const attributes = Object.keys(card.attributes);

    return <div className={`card${isSelected ? ' selected' : ''}`}>
        <image src={card.imageUrl} />
        <h4>{card.name}</h4>
        <p>{card.description}</p>
        <table>
            {
                attributes.map(m => <tr onClick={() => cardSelected(card, m)}>
                    <td>{m}</td>
                    <td>{card.attributes[m]}</td>
                </tr>)
            }
        </table>
    </div>
}