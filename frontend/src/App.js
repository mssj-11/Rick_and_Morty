import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import ListCharacters from './components/ListCharacters';
import Spinner from './components/Spinner';



function App() {
  const [search, saveSearch] = useState('');
  const [characters, saveCharacter] = useState([]);
  const [actualpage, saveActualPage] = useState(1);
  const [totalpages, saveTotalPages] = useState(1);
  const [loading, setLoading] = useState(false); // Nuevo estado para manejar el spinner


  useEffect(() => {
    const consultApi = async () => {
      if (search === '') return;
      setLoading(true); // Activar el spinner
      const characterPerPage = 5;//La API no permite modificar la cantidad de resultados por pagina y por defecto arroja 20 resultados de manera automatica.

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

      setLoading(false); // Desactivar el spinner
    }

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
        {loading ? (
          <Spinner /> // Mostrar el spinner si loading es true
        ) : (
          <ListCharacters characters={characters} />
        )}
        {/*<ListCharacters characters={characters} />*/}

        {(actualpage === 1) ? null : (
          <button onClick={previousPage} type="button" className="mr-2 btn btn-info">
            Previous
          </button>
        )}

        {(actualpage === totalpages) ? null : (
          <button onClick={nextPage} type="button" className="mr-2 btn btn-info">
            Next
          </button>
        )}
      </div>

      <br />
    </div>
  );
}

export default App;