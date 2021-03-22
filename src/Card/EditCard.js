import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readCard, readDeck } from "../utils/api/index";
import CardForm from "../Card/CardForm";

export default function EditCard() {
  const [deck, setDeck] = useState({cards:[]});
  const [card, setCard] = useState({ front: "", back: "" });
  const { deckId, cardId } = useParams();

  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck);

    readCard(cardId).then(setCard)
  }, [deckId,cardId]);

  function historyHandler() {
    history.push(`/decks/${deckId}`);
  }

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
    {card.front && <CardForm onHistory={historyHandler} card={card} deck={deck} />}
  </div>
  );
}
