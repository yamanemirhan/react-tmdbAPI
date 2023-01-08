import React from 'react';
import { Link } from 'react-router-dom';

// title, overview, vote_average, poster_path, release_date

let img_path = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie }) {
  return (
    <Link
      className="group flex justify-center cursor-pointer"
      to={`/movie/${movie?.title}`}
    >
      <div className="relative w-72 h-96 group-hover:scale-110 shadow-sm shadow-gray-50 duration-500 border rounded-lg">
        {movie?.poster_path ? (
          <img
            src={img_path + movie.poster_path}
            alt="Movie Img"
            className="w-72 h-96 border rounded-lg"
          />
        ) : (
          <img
            src="/images/def.png"
            alt="Movie Img"
            className="w-72 h-96 border rounded-lg"
          />
        )}
        <div>
          <h1 className="absolute w-full top-0 left-0 text-center text-2xl text-white bg-black bg-opacity-60 rounded-t-lg">
            {movie?.title}
          </h1>
          <p className="absolute top-0 left-0 h-full overflow-y-auto leading-3 group-hover:leading-6 text-lg text-amber-700 bg-blue-300 p-3 bg-opacity-80 font-bold opacity-0 group-hover:opacity-100 duration-500">
            {movie?.overview}
          </p>
          <span className="absolute bottom-2 left-2 text-amber-200 bg-slate-800 p-1 rounded-md">
            {movie?.release_date?.split('-')[0]}
          </span>
          <span className="absolute bottom-0 right-0 w-9 h-9 rounded-br-lg rounded-tl-lg flex justify-center items-center text-white text-lg bg-amber-500">
            {movie?.vote_average}
          </span>
        </div>
      </div>
    </Link>
  );
}
