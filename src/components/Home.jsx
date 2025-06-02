// components/Home.jsx
import { Link } from "react-router-dom";

// Liste des films (tu peux en ajouter d'autres)
const movies = [
  {
    id: 1,
    title: "Inception",
    description: "Un voleur qui infiltre les rêves...",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Voyage interstellaire pour sauver l’humanité...",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
];

function Home() {
  return (
    <div>
      <h1>Liste des films</h1>
      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <Link to={`/movie/${movie.id}`}>Voir la bande-annonce</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
