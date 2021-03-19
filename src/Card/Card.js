import React from "react";
import {Link,useHistory} from "react-router-dom";
import {deleteCard} from "../utils/api/index";

export default function Card({ card, deckId }) {
  const history = useHistory();
  const handleDelete = () => {
    const aborter = new AbortController();

    deleteCard(card.id,aborter.signal)
    .then(history.go(0));
  }
  return (
    <div>
      <div className="card w-50">
        <div className="card-body container d-flex justify-content-between">
          <div className="left-text col-6">
            <p className="card-text">{card.front}</p>
          </div>
          <div className="right-text col-6">
            <p className="card-text">{card.back}</p>
            <div className="buttons">
            <Link to={`${deckId}/cards/${card.id}/edit`}><button className="btn btn-secondary">Edit</button></Link>
            <button className="btn btn-danger mx-1" onClick={handleDelete}>Delete</button>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
