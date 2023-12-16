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
  const { characterName } = req.query;

  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${characterName}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});