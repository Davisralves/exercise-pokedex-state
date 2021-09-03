import React from 'react';
import './App.css';
import totalPokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfClicks: 0
    }
    this.addToCounter = this.addToCounter.bind(this);
    this.resetState =  this.resetState.bind(this);
  }

  resetState = () =>  window.location.reload(true);

  addToCounter = () => {
    this.setState((estadoAnterior, _props) => ({
      numberOfClicks: estadoAnterior.numberOfClicks + 1,
    }));
    if(this.state.numberOfClicks === 10) { this.resetState() } 
  }

  pokemonsToPrint = () => {
      let pokemonsToPrint = [];
      for(let index = 0; index < this.state.numberOfClicks; index += 1) {
        pokemonsToPrint.push(totalPokemons[index]);
      }
        return pokemonsToPrint;
    }

  render() {
    const pokemonsToPrint = this.pokemonsToPrint();
    return (
      <div className="App">
        <button onClick={this.addToCounter}>Add Pokemons {this.state.numberOfClicks}</button>
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemonsToPrint} />
      </div>
    );
  }
}

export default App;