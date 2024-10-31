import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const CharacterDetailCard = ({ character }) => {
  return (
    <Card 
      sx={{ 
        width: '80%', 
        margin: 'auto', 
        marginTop: 4, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: 3, 
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
        borderRadius: '12px'
      }}
    >
      {/* Carousel de imágenes */}
      <Carousel
        navButtonsAlwaysVisible
        autoPlay={false}
        indicators={true}
        sx={{ width: '60%', height: 'auto', maxWidth: 400, margin: 'auto', borderRadius: 2, overflow: 'hidden' }}
      >
        {character.images.map((image, index) => (
          <img key={index} src={image} alt={`${character.name} - ${index}`} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        ))}
      </Carousel>

      {/* Contenido del personaje */}
      <CardContent sx={{ textAlign: 'center', marginTop: 3 }}>
        <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
          {character.name}
        </Typography>

        {/* Información principal */}
        <Typography variant="body1" sx={{ fontSize: '1.2rem', marginBottom: 1 }}>
          <strong>Birthdate:</strong> {character.personal.birthdate || 'Unknown'}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', marginBottom: 1 }}>
          <strong>Gender:</strong> {character.personal.sex || 'Unknown'}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
          <strong>Blood Type:</strong> {character.personal.bloodType || 'Unknown'}
        </Typography>

        {/* Detalles adicionales */}
        <Box sx={{ marginTop: 3, textAlign: 'left', width: '80%' }}>
          <Typography variant="h6" component="div" gutterBottom sx={{ textAlign: 'center' }}>
            Additional Details
          </Typography>

          <Typography variant="body2" sx={{ fontSize: '1rem', marginBottom: 1 }}>
            <strong>Manga Debut:</strong> {character.debut.manga || 'Unknown'}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '1rem', marginBottom: 1 }}>
            <strong>Anime Debut:</strong> {character.debut.anime || 'Unknown'}
          </Typography>

          {/* Familia */}
          <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
            Family
          </Typography>
          <Box component="ul" sx={{ paddingLeft: 2 }}>
            {character.family 
              ? Object.entries(character.family).map(([relation, name], index) => (
                <li key={index}>
                  <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                    <strong>{relation}:</strong> {name}
                  </Typography>
                </li>
              )) 
              : <Typography variant="body2" sx={{ fontSize: '1rem' }}>Unknown</Typography>}
          </Box>

          {/* Habilidades */}
          <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
            Abilities
          </Typography>
          <Box component="ul" sx={{ paddingLeft: 2, maxHeight: 200, overflowY: 'auto' }}>
            {character.jutsu 
              ? character.jutsu.map((jutsu, index) => (
                <li key={index}>
                  <Typography variant="body2" sx={{ fontSize: '1rem' }}>{jutsu}</Typography>
                </li>
              )) 
              : <Typography variant="body2" sx={{ fontSize: '1rem' }}>Unknown</Typography>}
          </Box>

          {/* Tipos de Chakra */}
          <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
            Chakra Types
          </Typography>
          <Box component="ul" sx={{ paddingLeft: 2 }}>
            {character.natureType 
              ? character.natureType.map((type, index) => (
                <li key={index}>
                  <Typography variant="body2" sx={{ fontSize: '1rem' }}>{type}</Typography>
                </li>
              )) 
              : <Typography variant="body2" sx={{ fontSize: '1rem' }}>Unknown</Typography>}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterDetailCard;
