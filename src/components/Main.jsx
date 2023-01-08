import React, { useState, useEffect } from 'react';
import { useMovieContext } from '../context/MovieContext';
import Header from './Header';
import MovieCard from './MovieCard';

import.meta.env.VITE_APP_API_KEY;

const baseURL = 'https://api.themoviedb.org/3';

let url =
  baseURL +
  '/discover/movie?sort_by=popularity.desc&api_key=' +
  import.meta.env.VITE_APP_API_KEY;

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [currentURL, setCurrentURL] = useState(url);

  const { activeCat, changeActiveCat } = useMovieContext();

  useEffect(() => {
    fetch(currentURL)
      .then((res) => res.json())
      .then((movieData) => setMovies(movieData.results));
  }, [currentURL]);

  useEffect(() => {
    if (activeCat == 'Popular') {
      url =
        baseURL +
        '/discover/movie?sort_by=popularity.desc&api_key=' +
        import.meta.env.VITE_APP_API_KEY;
    }
    if (activeCat == 'Theatre') {
      url = `${baseURL}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'+'&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`;
    }
    if (activeCat == 'Kids') {
      url = `${baseURL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'+'&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`;
    }
    if (activeCat == 'Drama') {
      url = `${baseURL}/discover/movie?with_genres=18&primary_release_year=2014'+'&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`;
    }
    if (activeCat == 'Comedie') {
      url = `${baseURL}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc'+'&api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`;
    }

    setCurrentURL(url);
  }, [activeCat]);

  const searchMovie = (e) => {
    if (search !== '') {
      if (e.key == 'Enter') {
        url =
          baseURL +
          '/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=' +
          search;
        setCurrentURL(url);
        setSearch('');
        changeActiveCat('');
      }
    }
  };

  return (
    <div className="flex flex-col bg-slate-800 min-h-screen">
      <Header search={search} setSearch={setSearch} searchMovie={searchMovie} />
      <div className="w-full h-full gap-7 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 bg-slate-500">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
