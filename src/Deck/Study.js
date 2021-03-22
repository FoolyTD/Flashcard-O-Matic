import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api/index";

export default function Study({ decks }) {
  const [currentSide, setCurrentSide] = useState("front");
  const [cardCount, setCardCount] = useState(0);
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState({});

  const history = useHistory();
  const {deckId} = useParams();

  useEffect(() => {
    readDeck(deckId).then((data) => {
      setDeck(data);
      setCards(data.cards);
    });
  }, [deckId]);

  const handleFlip = () => {
    if (cardCount === deck.cards.length - 1 && currentSide === "back") {
      const response = window.confirm("Do you want to restart this deck?");
      if (response) {
        setCardCount((current) => 0);
      } else {
        history.push("/");
      }
    } else if (currentSide === "front") {
      setCurrentSide((current) => "back");
    } else if (currentSide === "back") {
      setCurrentSide((current) => "front");
    }
  };

  const handleNext = () => {
    if (cardCount === deck.cards.length - 1) {
      const response = window.confirm("Do you want to restart this deck?");
      if (response) {
        setCardCount((current) => 0);
      } else {
        history.push("/");
      }
    } else if (cardCount < deck.cards.length - 1) {
      setCurrentSide((current) => "front");
      setCardCount((current) => current + 1);
    }
  };

  return (
    <div className="container">
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/">{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
      </div>
      <h2>{deck.name}: Study</h2>
      {deck.cards && deck.cards.length < 3 && (
        <div>
          <h3>Not enough cards.</h3>
          <p>
            You neead at least 3 cards to study. There are {cards.length} cards
            in this deck.
          </p>
          <Link to={`/decks/${deckId}/cards/new`}><button className="btn-primary btn">Add Cards</button></Link>
        </div>
      )}
      {deck.cards && deck.cards.length >= 3 && (
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">
              Card {cardCount + 1} of {deck.cards.length}
            </h5>
            <p className="card-text">{deck.cards[cardCount][currentSide]}</p>
            <button
              type="button"
              className="btn btn-secondary mx-1"
              onClick={handleFlip}
            >
              Flip
            </button>
            {currentSide === "back" && <button
              className="btn btn-primary mx-1"
              onClick={handleNext}
            >
              Next
            </button>}
          </div>
        </div>
      )}
    </div>
  );
}
