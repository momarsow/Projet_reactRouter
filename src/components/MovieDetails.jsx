import React from "react";
import { useParams, Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "Un voleur qui infiltre les rêves...",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    trailerDescription: "Bande-annonce officielle du film Inception",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Voyage interstellaire pour sauver l'humanité...",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    trailerDescription: "Découvrez la bande-annonce d’Interstellar",
  },
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id, 10));

  if (!movie) {
    return <h2>Film introuvable</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>

      {/* Vidéo intégrée */}
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Bande-annonce"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Description de la bande-annonce */}
      <p style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
        {movie.trailerDescription}
      </p>

      <br />
      <Link to="/">Retour à la liste</Link>
    </div>
  );
}

export default MovieDetails;
