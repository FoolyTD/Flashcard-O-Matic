import React, {useEffect} from "react";
import Deck from "../Deck/Deck";
import { Link} from "react-router-dom";
import {listDecks} from "../utils/api/index";

export default function DeckList({decks, handleDelete, setDecks}) {
    
    useEffect(() => {
      const aborter = new AbortController();

      listDecks(aborter.signal)
          .then(data => setDecks(data));
  }, [decks]);


    return (
        <div>
        <Link to={`/decks/new`}><button type="button" className="btn btn-lg btn-primary my-2">Create Deck</button></Link>
        <div>
            <ul className="list-group container">
                  {decks.map(deck => <Deck key={deck.id} deck={deck} handleDelete={handleDelete}/>)}   
            </ul>
        </div>
        </div>
        )
}