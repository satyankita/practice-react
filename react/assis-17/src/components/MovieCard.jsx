function MovieCard({ movie }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{movie.title}</h3>

        <p>{movie.genre}</p>

        <p>{movie.year}</p>

        <p>⭐ {movie.rating}</p>

        <button>❤️ {movie.likes}</button>
      </div>
    </div>
  );
}

export default MovieCard;