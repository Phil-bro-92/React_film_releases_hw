import React from "react";
import Film from "./Film";

const FilmList = ({ films }) => {
  const filmNodes = films.map((film) => {
    return (
      <li key={film.title}>
        <a href={film.url}>{film.name}</a>
      </li>
    );
  });
  return (
    <div>
      <ul>{filmNodes}</ul>
    </div>
  );
};

export default FilmList;
