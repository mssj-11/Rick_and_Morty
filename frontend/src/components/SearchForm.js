import React, { useState } from 'react';
import Error from './Error';

const SearchForm = ({ saveSearch }) => {
  const [term, saveTerm] = useState('');
  const [error, saveError] = useState(false);

  const searchCharacters = (e) => {
    e.preventDefault();

    if (term.trim() === '') {
      saveError(true);
      return;
    }

    saveError(false);
    saveSearch(term);
  };

  return (
    <form onSubmit={searchCharacters}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search character, for example: Rick"
            onChange={(e) => saveTerm(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Search
          </button>
        </div>
      </div>
      {/*If an error exist, the ERROR component will be created*/}
      {error ? <Error mensaje="Add a search term" /> : null}
    </form>
  );
};

export default SearchForm;
