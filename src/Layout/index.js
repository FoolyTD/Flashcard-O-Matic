import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import CreateDeck from "../Home/CreateDeck";
import DeckList from "../Home/DeckList";
import Study from "../Deck/Study";
import { deleteDeck } from "../utils/api/index";
import View from "../Deck/View";
import EditDeck from "../Deck/EditDeck";
import CreateCard from "../Card/CreateCard";
import EditCard from "../Home/EditCard";

function Layout() {
  const [decks, setDecks] = useState([]);

  const handleDelete = (DeckId) => {
    const response = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (response) {
      deleteDeck(DeckId);
    }
  };
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/:deckId/study">
            <Study decks={decks} />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck decks={decks} />
          </Route>
          <Route path="/decks/:deckId" exact>
            <View />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId">
            <EditCard />
          </Route>
          <Route path="/" exact>
            <DeckList
              decks={decks}
              setDecks={setDecks}
              handleDelete={handleDelete}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
