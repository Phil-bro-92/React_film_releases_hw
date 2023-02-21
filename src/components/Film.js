import React from "react";

const Film = ({ film, url }) => {
  return (
    <div>
      <ul>
        <li>
          <a href={url}>{film}</a>
        </li>
      </ul>
    </div>
  );
};

export default Film;
