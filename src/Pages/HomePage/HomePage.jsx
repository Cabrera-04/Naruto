import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import axios from 'axios';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import './HomePage.css'

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://dattebayo-api.onrender.com/characters');
        if (Array.isArray(response.data.characters)) {
          setCharacters(response.data.characters);
        } else {
          setError("La API no devolvió un arreglo de personajes");
        }
      } catch (error) {
        setError("Hubo un problema al obtener los personajes.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <div className='loading'>
    <img src="https://i.pinimg.com/originals/17/2c/14/172c1498808c0ac50d9aad688f92ae23.gif" alt="" />

  </div>;

  return (
    <div className="Home">
      {error ? (
        <div>{error}</div>
      ) : (
        characters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id} style={{ textDecoration: 'none' }}>
            <CharacterCard character={character} />
          </Link>
        ))
      )}
    </div>
  );
};

export default HomePage;
