import React from 'react';
import { useParams, useHistory } from "react-router-dom";

const AnimalSingle = () => {
    let { animal } = useParams();
    let history = useHistory();

    return ( 
        <div className="animal">
            <h2>This is the page for <span className="capital">{animal}</span></h2>
            <div className="animal-details">
                <img className="small-animal" src={`https://source.unsplash.com/1600x900/?${animal}`} alt="picture-of-an-animal" />
            </div>
            <div>
                <button onClick={() => history.goBack()}>Back to Animals</button>
            </div>
        </div>
    );
};

export default AnimalSingle;