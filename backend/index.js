const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors()); // Habilitar CORS para todas las rutas

// Ruta de bienvenida para la URL base
app.get('/', (req, res) => {
  res.send('¡Welcome to the Rick and Morty API!');
});

// Ruta de búsqueda
app.get('/api/search', async (req, res) => {
  const { characterName, per_page, page } = req.query;

  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${characterName}&per_page=${per_page}&page=${page}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Ruta para obtener detalles de un personaje por ID
app.get('/api/character/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const characterInfo = response.data;
    res.json(characterInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});