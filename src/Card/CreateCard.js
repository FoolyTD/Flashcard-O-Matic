import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import CardForm from "./CardForm";

export default function CreateCard() {
  const [deck, setDeck] = useState({});
  const route = useRouteMatch();
  const { deckId } = route.params;

  useEffect(() => {
    const aborter = new AbortController();

    readDeck(deckId, aborter.signal).then((deck) => setDeck(deck));
  }, [deckId]);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h3>{deck.name}: Add Card</h3>
      <CardForm deck={deck} />
    </div>
  );
}
