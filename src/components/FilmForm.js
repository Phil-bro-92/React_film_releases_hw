import React, { useState } from "react";

const FilmForm = ({ addFilm }) => {
  const [film, setFilm] = useState("");
  const [url, setUrl] = useState("");

  const handleFilmInput = (event) => {
    setFilm(event.target.value);
  };
  const handleUrlInput = (event) => {
    setUrl(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const filmToSubmit = film.trim();
    const urlToSubmit = url.trim();
    if (!filmToSubmit || !urlToSubmit) {
      return;
    }
    addFilm({
      name: filmToSubmit,
      url: urlToSubmit,
    });
    setFilm("");
    setUrl("");
  };
  return (
    <div>
    <h2>Add a Film</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Film"
          onChange={handleFilmInput}
          value={film}
        />
        <br />
        <input
          type="text"
          placeholder="URL"
          onChange={handleUrlInput}
          value={url}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FilmForm;
