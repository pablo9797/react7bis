import React from 'react';
import './App.css';
import Personnes from './Components/Personnes';
import axios from 'axios';


const samplePersonnes = [
  {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }
];


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      personne: samplePersonnes
    };
    this.getPersonne = this.getPersonne.bind(this);
  }
  
  getPersonne() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          personne: data[0],
        });
    });
  }
  
  
render () {
  return (
    <div className="App">
      <Personnes personne={this.state.personne} />
      <button type="button" onClick={this.getPersonne}>Get personne</button>
    </div>
    );
    
  }
}

export default App;