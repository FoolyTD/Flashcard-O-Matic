import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./Form";
import { readDeck } from "../utils/api/index";

export default function EditDeck() {
  const [deck, setDeck] = useState({ name: "", description: "" });
  const {deckId} = useParams();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
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
