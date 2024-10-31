import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { addToFavorites, removeFromFavorites, isFavorite } from '../../FireBase/FavouriteService';

const CharacterCard = ({ character }) => {
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const favStatus = await isFavorite(character);
      setIsFav(favStatus);
    };
    checkFavoriteStatus();
  }, [character]);

  const handleToggleFavorite = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isFav) {
      await removeFromFavorites(character);
      setIsFav(false);
    } else {
      await addToFavorites(character);
      setIsFav(true);
    }
  };

  const handleCardClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 3,
        padding: 3,
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        '&:hover': { boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' },
        cursor: 'pointer',
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        sx={{ width: 220, height: 220, borderRadius: '8px' }} // Imagen más grande
        image={character.images[0]}
        alt={character.name}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingLeft: 3 }}>
        <CardContent>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}> {/* Tamaño mayor para el nombre */}
            {character.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.3rem', marginTop: 2 }}>
            <strong>Birthdate:</strong> {character.personal.birthdate || 'Unknown'}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.3rem' }}>
            <strong>Gender:</strong> {character.personal.sex || 'Unknown'}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.3rem' }}>
            <strong>Blood Type:</strong> {character.personal.bloodType || 'Unknown'}
          </Typography>
        </CardContent>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 1 }}>
          <IconButton
            onClick={handleToggleFavorite}
            onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
            color="primary"
            aria-label="toggle favorite"
          >
            {isFav ? <FavoriteIcon sx={{ fontSize: 35, color: 'red' }} /> : <FavoriteBorderIcon sx={{ fontSize: 35, color: 'black' }} />}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default CharacterCard;
