import { createContext, useContext } from 'react';

export const MovieContext = createContext({
  activeCat: '',
  changeActiveCat(cat) {},
});

export const useMovieContext = () => useContext(MovieContext);
