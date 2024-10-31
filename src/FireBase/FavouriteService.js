import { db } from './FireBaseConfig';
import { doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';


export const addToFavorites = async (character) => {
  try {
    console.log("Intentando guardar personaje en favoritos:", character);
    await setDoc(doc(db, 'favorites', character.id.toString()), {
      name: character.name,
      birthdate: character.personal?.birthdate || 'Desconocido',
      images: character.images || [],
      personal: {
        sex: character.personal?.sex || 'Desconocido',
        bloodType: character.personal?.bloodType || 'Desconocido'
      }
    });
    console.log("Personaje guardado en favoritos exitosamente.");
  } catch (error) {
    console.error("Error al agregar a favoritos: ", error);
  }
};


export const isFavorite = async (character) => {
  try {
    const docRef = doc(db, 'favorites', character.id.toString());
    const docSnap = await getDoc(docRef);
    const exists = docSnap.exists();
    console.log(`¿El personaje "${character.name}" está en favoritos?`, exists);
    return exists;
  } catch (error) {
    console.error("Error al verificar si el personaje está en favoritos: ", error);
    return false;
  }
};


export const removeFromFavorites = async (character) => {
  try {
    console.log("Intentando eliminar personaje de favoritos:", character);
    await deleteDoc(doc(db, 'favorites', character.id.toString()));
    console.log("Personaje eliminado de favoritos.");
  } catch (error) {
    console.error("Error al eliminar de favoritos: ", error);
  }
};
