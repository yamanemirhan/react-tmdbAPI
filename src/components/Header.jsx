import React from 'react';
import { useMovieContext } from '../context/MovieContext';

let headerCategories = ['Popular', 'Comedie', 'Drama', 'Kids'];

export default function Header({ search, setSearch, searchMovie }) {
  const { activeCat, changeActiveCat } = useMovieContext();

  return (
    <header className="md:w-full md:mx-auto bg-slate-900 p-7 rounded-b-md">
      <nav className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-around items-center">
        <ul className="flex space-x-7 md:space-x-10 text-white md:text-xl font-semibold">
          {headerCategories.map((value, i) => {
            return (
              <li key={i}>
                <a
                  href="#"
                  name={value}
                  onClick={(e) => changeActiveCat(e.target.name)}
                  className={`hover:text-[#cc4040] ${
                    activeCat == value ? 'text-[#cc4040]' : ''
                  }`}
                >
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={searchMovie}
            type="text"
            placeholder="Search Movie..."
            className="focus:outline-none p-2 w-[15em] rounded-md text-gray-900"
          />
        </div>
      </nav>
    </header>
  );
}
