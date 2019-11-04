import React from 'react';


function Personnes({personne }) {
    return (
      <div className="Personnes">
        <img
          src={personne.image}
          alt={personne.character}
        />
        <ul>
          <li>
            Name: {personne.character}{' '}
          </li>
          <li>Quote: {personne.quote}{' '}</li>
        </ul>
      </div>
    );
  };
  
  export default Personnes;