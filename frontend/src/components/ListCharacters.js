import React from 'react';
import Character from './Character';

const ListCharacters = ({ characters }) => {
    console.log(characters);
    return (
      <div className="col-12 p-5 row">
        {characters && characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    );
  };
  

export default ListCharacters;
