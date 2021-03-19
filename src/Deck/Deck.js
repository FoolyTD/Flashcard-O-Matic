import React from "react";
import { Link } from "react-router-dom";

export default function Deck({deck, handleDelete}) {
    const {
        name,
        cards,
        description,
        id
    } = deck;
    return (
        <li key={id} className="list-group-item">
            <div className="d-flex justify-content-between">
                <h3>{name}</h3>
                <p>{cards.length} cards</p>
            </div>
            <p>{description}</p>
            <div className="d-flex justify-content-between">
                <div className="left-buttons">
                    <Link to={`/decks/${id}`}><button className="btn btn-secondary mx-1">View</button></Link>
                    <Link to={`/decks/${id}/study`}>
                        <button className="btn btn-secondary mx-1">Study</button>
                    </Link>   
                </div>
                <div className="right-buttons">
                    <button className="btn-danger btn" onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </div>
        </li>
    )
}