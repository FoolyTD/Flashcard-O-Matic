import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { createCard, updateCard } from "../utils/api/index";

export default function CardForm({ deck, card }) {
  const initialState = {
    front: card ? card.front : "",
    back: card ? card.back : "",
  };
  const { url } = useRouteMatch();
  const deckId = deck.id;

  const history = useHistory();

  const [formData, setFormData] = useState(initialState);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target["name"]]: target.value });
  };

  const handleDone = () => {
    history.push(`/decks/${deckId}`);
  };

  const handleSave = () => {
    
    const aborter = new AbortController();
    
    if(url.includes('new')) {
    const newCard = {
      front: formData.front,
      back: formData.back,
    };
    createCard(Number(deckId), newCard, aborter.signal)
    .then(
      setFormData((currentForm) => initialState)
    ); 
    } else {
    const newCard = {
      ...card,
      front: formData.front,
      back: formData.back
    }
    updateCard(newCard);
    history.push(`/decks/${deckId}`);
    }
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Front</label>
          <textarea
            name="front"
            value={formData.front}
            className="form-control"
            placeholder="Front side of card"
            onChange={handleChange}
          />
          <label>Back</label>
          <textarea
            name="back"
            value={formData.back}
            className="form-control"
            placeholder="Back side of card"
            onChange={handleChange}
          />
          <div className="buttons my-2">
            <button className="btn btn-secondary" onClick={handleDone}>
              Done
            </button>
            <button className="btn btn-primary mx-1" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
