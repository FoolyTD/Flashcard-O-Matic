import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { readCard, readDeck } from "../utils/api/index";
import CardForm from "../Card/CardForm";

export default function EditCard() {
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const route = useRouteMatch();
  const { deckId, cardId } = route.params;

  useEffect(() => {
    const aborter = new AbortController();

    readDeck(deckId, aborter.signal)
    .then((deck) => {
        setDeck(deck);
    })
    readCard(cardId,aborter.signal)
    .then(redCard=>setCard(redCard))
  }, [deckId]);

  return (
    <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}/cards/${cardId}`}>{card && deck.name}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Edit Card {card.id}
        </li>
      </ol>
    </nav>
    <h3>Edit Card</h3>
    {card.front && <CardForm card={card} deck={deck} />}
  </div>
  );
}
