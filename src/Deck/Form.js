import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import {
  createDeck,
  updateDeck
} from "../utils/api/index";

export default function Form({ deck, setDeck }) {
  const initialState = {
    deckName: deck ? deck.name : "",
    deckDescription: deck ? deck.description : "",
  };
  const history = useHistory();

  const [formData, setFormData] = useState(initialState);
  const { url } = useRouteMatch();

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target["name"]]: target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (url === "/decks/new") {
      const deck = {
        name: [formData.deckName].join(""),
        description: [formData.deckDescription].join(""),
      };
      createDeck(deck).then((newDeck) => history.push(`${newDeck.id}`));
    } else if (url.includes("edit")) {
        const newDeck = {
          ...deck,
          name: [formData.deckName].join(""),
          description: [formData.deckDescription].join(""),
        }
        updateDeck(newDeck).then((deck) => history.push(`/decks/${deck.id}`));
    }
  };

  return (
    <div>
      {url.includes("decks") && (
        <div>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="deckName"
                value={formData.deckName}
                placeholder={"Enter Deck Name"}
                onChange={handleChange}
              />
              <label className="mx-1 my-1">Description</label>
              <textarea
                className="form-control"
                name="deckDescription"
                value={formData.deckDescription}
                placeholder="Brief description of the deck"
                type="textarea"
                onChange={handleChange}
              />
              <div className="buttons my-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button type="submit" className="btn btn-secondary mx-1">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
