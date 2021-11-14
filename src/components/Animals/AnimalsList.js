import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";

import { Switch, Route, withRouter } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";

class AnimalsList extends Component {
    state = {
        searchInput: "",
    };

    searchInputHandler = (e) => {
        this.setState({
            searchInput: e.target.value,
        });
    };
    
    render() {
        const filteredAnimals = animals.filter((animal) => {
            return animal.name
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase());
        });

        const animalslisting = filteredAnimals.map((item) => (
            <AnimalsCard key={item.name} name={item.name} />
        ));

        return ( 
            <div>
                <Switch>
                    <Route exact path={this.props.match.path}>
                        <div className="search-field">
                            <label>Search for an animal:</label>
                            <input 
                                type="text" 
                                onChange={this.searchInputHandler} 
                                />
                        </div>
                        <div className="animalsList">
                            {animalslisting}
                        </div>
                    </Route>
                    <Route path={`${this.props.match.path}/:animal`}>
                        <AnimalSingle />
                    </Route>
                </Switch>
            </div>
        );
    };
}

export default withRouter (AnimalsList);