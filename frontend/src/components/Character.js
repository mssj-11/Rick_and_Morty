import React, { useState } from 'react';
import InfoCharacter from './InfoCharacter';

const Character = ({ character }) => {
  const { id, name, status, species, image } = character;
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(true);
  };

  const handleClose = () => {
    setShowInfo(false);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <b>Status:</b> {status}
          </p>
          <p className="card-text">
            <b>Species:</b> {species}
          </p>
        </div>
        <div className="card-footer">
          <button onClick={handleClick} className="btn btn-info btn-block">
            View Details
          </button>
        </div>
      </div>
      {showInfo && <InfoCharacter characterId={id} onClose={handleClose} />}
    </div>
  );
};

export default Character;
