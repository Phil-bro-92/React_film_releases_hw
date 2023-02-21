import React from "react";
import Film from "./Film";

const FilmList = ({ films }) => {
  const filmNodes = films.map((film) => {
    return (
      <Film key={film.id} film={film.name} url={film.url}/>
    );
  });
  return (
    <div>
      {filmNodes}
    </div>
  );
};

export default FilmList;
