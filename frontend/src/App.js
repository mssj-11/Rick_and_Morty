import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import ListCharacters from './components/ListCharacters';


function App() {
  const [search, saveSearch] = useState('');
  const [characters, saveCharacter] = useState([]);
  const [actualpage, saveActualPage] = useState(1);
  const [totalpages, saveTotalPages] = useState(1);

  useEffect(() => {
    const consultApi = async () => {
      if (search === '') return;
      const characterPerPage = 5;

      const url = `http://localhost:3001/api/search?characterName=${search}&per_page=${characterPerPage}&page=${actualpage}`;

      const response = await fetch(url);
      const result = await response.json();

      saveCharacter(result.results);

      // Calcular Total de páginas
      const calculateTotalPages = Math.ceil(result.count / characterPerPage);
      saveTotalPages(calculateTotalPages);

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });
      
    };

    consultApi();
  }, [search, actualpage]);

  const previousPage = () => {
    const newCurrentPage = actualpage - 1;
    if (newCurrentPage === 0) return;

    saveActualPage(newCurrentPage);
  };

  const nextPage = () => {
    const newCurrentPage = actualpage + 1;
    if (newCurrentPage > totalpages) return;

    saveActualPage(newCurrentPage);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center mb-4">Rick and Morty character finder</h1>

        <SearchForm saveSearch={saveSearch} />
      </div>

      <div className="row justify-content-center mb-5">
        <ListCharacters characters={characters} />

        {(actualpage === 1) ? null : (
          <button onClick={previousPage} type="button" className="mr-1 btn-primary">
            &laquo; Previous
          </button>
        )}

        {(actualpage === totalpages) ? null : (
          <button onClick={nextPage} type="button" className="mr-1 btn-primary">
            Next &raquo;
          </button>
        )}
      </div>

      <br />
    </div>
  );
}

export default App;