
function MovieCard({
  title,
  description,
  image,
  featured = false,
}) {
  return (
    <article
      className={`movie-card ${featured ? "featured" : ""}`}
    >
      {/* Movie poster */}
      <div className="poster-area">
        <img
          className="movie-poster"
          src={image}
          alt={`${title} movie poster`}
        />
      </div>

      {/* Movie information */}
      <div className="movie-details">
        <div className="movie-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <button className="watch-button" type="button">
          WATCH NOW
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
