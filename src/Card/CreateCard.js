import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import CardForm from "./CardForm";

export default function CreateCard() {
  const [deck, setDeck] = useState({cards:[]});
  // const route = useRouteMatch();
  const history = useHistory();
  const { deckId } = useParams();
  // const { deckId } = route.params;

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

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
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h3>{deck.name}: Add Card</h3>
      <CardForm onHistory={historyHandler} deck={deck} />
    </div>
  );
}
