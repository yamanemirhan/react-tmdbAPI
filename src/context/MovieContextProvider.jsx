import { useState } from 'react';
import { MovieContext } from './MovieContext';

const MovieContextProvider = ({ children }) => {
  const [activeCat, setActiveCat] = useState('Popular');
  const changeActiveCat = (cat) => {
    setActiveCat(cat);
  };
  return (
    <MovieContext.Provider value={{ activeCat, changeActiveCat }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
