import React, { useEffect, useState } from "react";
import Deck from "../Deck/Deck";
import { Link } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api/index";

export default function DeckList() {
  const [decks, setDecks] = useState([]);

  const handleDelete = (DeckId) => {
    const response = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (response) {
      deleteDeck(DeckId);
    }
  };
  useEffect(loadDecks, []);
  function loadDecks() {
    listDecks().then(setDecks);
  }
  /*         (loadDecks) => {
      listDecks().then(setDecks);
  }, [decks]);
 */

  return (
    <div>
      <Link to={`/decks/new`}>
        <button type="button" className="btn btn-lg btn-primary my-2">
          Create Deck
        </button>
      </Link>
      <div>
        <ul className="list-group container">
          {decks.map((deck) => (
            <Deck key={deck.id} deck={deck} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}
