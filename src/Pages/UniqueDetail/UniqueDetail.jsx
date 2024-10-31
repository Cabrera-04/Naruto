import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CharacterDetailCard from '../../Components/CharacterDetailCard/CharacterDetailCard';

const UniqueDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://dattebayo-api.onrender.com/characters/${id}`);
        setCharacter(response.data);
      } catch (error) {
        setError("Error al obtener los detalles del personaje.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <div className='loading'>
  <img src="https://i.pinimg.com/originals/17/2c/14/172c1498808c0ac50d9aad688f92ae23.gif" alt="" />

</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {character ? <CharacterDetailCard character={character} /> : <p>No se encontraron detalles del personaje.</p>}
    </div>
  );
};

export default UniqueDetail;
