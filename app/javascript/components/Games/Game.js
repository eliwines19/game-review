import React from 'react'

const Game = (props) => {
    return (
        <div className="card">
            <div className="game-logo">
                <img src={props.attributes.image_url} alt={props.attributes.title}/>
            </div>
            <div className="game-title">{props.attributes.title}</div>
            <div className="game-description">{props.attributes.description}</div>
            <div className="game-score">{props.attributes.avg_score}</div>
            <div className="game-link">
                <a href=""></a>
            </div>
        </div>
    )
}

export default Game