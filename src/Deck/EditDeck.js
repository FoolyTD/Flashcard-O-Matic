import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Form from "./Form";
import { readDeck } from "../utils/api/index";

export default function EditDeck() {
  const [deck, setDeck] = useState({});
  const route = useRouteMatch();
  const deckId = parseInt(route.params.deckId);

  useEffect(() => {
    const aborter = new AbortController();

    readDeck(deckId, aborter.signal).then(setDeck);
    // can also use .then(deck=>setDec(deck))
  }, [deckId]);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">{deck.name}</li>
          <li className="breadcrumb-item">Edit Deck</li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {deck.name && <Form deck={deck} setDeck={setDeck} />}
    </div>
  );
}
