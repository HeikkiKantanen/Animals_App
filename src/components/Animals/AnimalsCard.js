import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

const AnimalsCard = (props) => {
const match = useRouteMatch();
    return (
        <div className="card-wrapper">
            <div className="card">
                <img src={`https://source.unsplash.com/1600x900/?${props.name}`} />
                <h2>{props.name}</h2>
                <div className="card-link">
                    <Link to={`${match.url}/${props.name}`}>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default AnimalsCard;