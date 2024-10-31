import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center', padding: '1rem' }}>
      <Link to={'/'}>
        <Button
          variant="outlined"
          sx={{
            color: '#ffffff',
            borderColor: '#ff7f50',
            backgroundColor: '#ff4500',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#ffa500',
              color: '#000000',
              borderColor: '#ffa500',
            },
          }}
        >
          Home
        </Button>
      </Link>
      <Link to={'/Favourites'}>
        <Button
          variant="outlined"
          sx={{
            color: '#ffffff',
            borderColor: '#ff7f50',
            backgroundColor: '#ff4500',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#ffa500',
              color: '#000000',
              borderColor: '#ffa500',
            },
          }}
        >
          Favourites
        </Button>
      </Link>
      <Link to={'/AboutMePage'}>
        <Button
          variant="outlined"
          sx={{
            color: '#ffffff',
            borderColor: '#ff7f50',
            backgroundColor: '#ff4500',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#ffa500',
              color: '#000000',
              borderColor: '#ffa500',
            },
          }}
        >
          About Me
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
