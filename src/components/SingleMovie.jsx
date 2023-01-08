import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

// /search/movie?api_key=#&query=#

import.meta.env.VITE_APP_API_KEY;
const baseURL = 'https://api.themoviedb.org/3';
let img_path = 'https://image.tmdb.org/t/p/w500';

export default function SingleMovie() {
  const [movie, setMovie] = useState([]);
  const { title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      baseURL +
        '/search/movie?api_key=' +
        import.meta.env.VITE_APP_API_KEY +
        '&query=' +
        title
    )
      .then((res) => res.json())
      .then((movieData) => setMovie(movieData.results[0]));
  }, []);

  return (
    <>
      <div className="relative m-auto min-h-screen flex flex-col bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat text-white text-lg font-semibold">
        {movie?.backdrop_path ? (
          <img
            src={img_path + movie.backdrop_path}
            alt="Movie Img"
            className="w-1/2 mx-auto mt-3 h-full rounded-lg"
          />
        ) : (
          <img
            src="/images/def.png"
            alt="Movie Img"
            className="w-1/3 mx-auto mt-3 h-full rounded-lg"
          />
        )}
        <div className="flex flex-col gap-5 p-2 text-center">
          <h1 className="text-5xl uppercase font-bold">{movie?.title}</h1>
          <p className="font-semibold text-2xl">{movie?.overview}</p>
          <span>{movie?.tagline}</span>
          <span className="text-indigo-500 w-12 h-12 mx-auto flex justify-center items-center bg-yellow-200 rounded-full shadow-lg shadow-white">
            {movie?.vote_average}
          </span>
          <ArrowLeftIcon
            onClick={() => navigate(-1)}
            className="absolute w-16 h-16 cursor-pointer top-2 left-2 text-white border rounded-md bg-opacity-60 bg-black z-40"
          />
        </div>
      </div>
    </>
  );
}
