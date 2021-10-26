import React from "react";

const AnimalsCard = (props) => {
    return (
        <div className="card-wrapper">
        <div className="card">
            <h2>{props.name}</h2>
            <img src={`https://source.unsplash.com/1600x900/?${props.name}`} />
        </div>
        </div>
    );
};

export default AnimalsCard;