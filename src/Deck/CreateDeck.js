import React from "react";
import Form from "./Form";
import {Link} from "react-router-dom";

export default function CreateDeck() {
    return (
        <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              Create Deck
            </li>
          </ol>
        </nav>
        <h1>Create Deck</h1>
        <Form />
      </div>
    )
}