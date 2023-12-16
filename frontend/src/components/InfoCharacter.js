import React, { useState, useEffect } from 'react';
import '../css/Modal.css';

const InfoCharacter = ({ characterId, onClose }) => {
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/character/${characterId}`);
        const data = await response.json();
        setCharacterInfo(data);
      } catch (error) {
        console.error('Error fetching character info:', error);
      }
    };

    fetchCharacterInfo();
  }, [characterId]);

  if (!characterInfo) {
    return <p>Loading character information...</p>;
  }

  const { name, status, species, image, gender, origin, location, episode } = characterInfo;
  // Extraer solo los números de los episodios
  const episodeNumbers = episode.map(ep => ep.split('/').pop());

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn btn-danger btn m-2" onClick={onClose}>
          X
        </button>
        <div className="row modal-content-container">
          <div className="modal-image-container">
            <img className="m-2 text-center" src={image} alt={name} />
          </div>
          <div className="modal-info-container">
            <h2>{name}</h2>
            <p><b>Status:</b> {status}</p>
            <p><b>Species:</b> {species}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Origin:</b> {origin.name}</p>
            <p><b>Location:</b> {location.name}</p>
            <p><b>Episode:</b> {episodeNumbers.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCharacter;
