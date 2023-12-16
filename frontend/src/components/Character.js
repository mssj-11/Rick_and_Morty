import React from 'react';

const Character = ({ character }) => {
  const { id, name, status, species, image } = character;

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
          <a href={`https://rickandmortyapi.com/api/character/${id}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Character;
