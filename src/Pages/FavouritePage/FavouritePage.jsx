import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseConfig';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import './FavouritePage.css'

const FavouritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesCollection = collection(db, 'favorites');
      const favoritesSnapshot = await getDocs(favoritesCollection);
      const favoritesList = favoritesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFavorites(favoritesList);
    };

    fetchFavorites();
  }, []);

  return (
    <div className='Favourite'>
      {favorites.length ? (
        favorites.map(fav => <CharacterCard key={fav.id} character={fav} />)
      ) : (
        <div className='empty'>
          <p>This place is too empty</p>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/727b5e71339223.5bea209079d37.gif" alt="" />

        </div>
      )}
    </div>
  );
};

export default FavouritePage;
