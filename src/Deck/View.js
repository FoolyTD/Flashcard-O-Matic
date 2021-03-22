import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api/index";
import { Link, useParams, useHistory } from "react-router-dom";
import Card from "../Card/Card";
import { deleteDeck } from "../utils/api/index";

export default function View() {
  const [deck, setDeck] = useState({cards:[]});
  const [cards, setCards] = useState({front:"",back:""});

  const history = useHistory();
  const {deckId} = useParams();

  const handleDelete = () => {
    const response = window.confirm("Are you sure you want to delete?");
    if (response) {
      deleteDeck(deckId);
      history.push('/');
    }
  }

  useEffect(() => {
    readDeck(deckId).then((data) => {
      setDeck(data);
      setCards(data.cards);
    });
  }, [deckId]);

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">{deck.name}</li>
        </ol>
      </nav>
      <div className="container">
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <div className="d-flex justify-content-between">
          <div className="left-buttons">
            <Link to={`/decks/${deckId}/edit`}><button className="btn btn-secondary">Edit</button></Link>
            <Link to={`/decks/${deckId}/study`}><button className="btn btn-primary mx-2">Study</button></Link>
            <Link to={`/decks/${deckId}/cards/new`}><button className="btn btn-primary">Add Cards</button></Link>
          </div>
          <div className="right-buttons">
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>  
          </div>
        </div>
      </div>
      <h2 className="my-3">Cards</h2>
      <div>
          <ul className="list-group">
            {cards.length && cards.map(card => <Card key={card.id} card={card} deckId={deckId}/>)}
          </ul>
      </div>
    </div>
  );
}
