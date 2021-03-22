import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import CreateDeck from "../Deck/CreateDeck";
import DeckList from "../Home/DeckList";
import Study from "../Deck/Study";
import View from "../Deck/View";
import EditDeck from "../Deck/EditDeck";
import CreateCard from "../Card/CreateCard";
import EditCard from "../Card/EditCard";

function Layout() {

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
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
            <DeckList />
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
