import React from 'react'
import noMovieImg from '../assets/no-movie.png'
import starImg from '../assets/star.svg'

const MovieCard = ({ movie: { id, title, vote_average, poster_path, release_date, original_language } }) => {
  return (
    <div className="movie-card">
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noMovieImg} alt={title || "No movie poster"} />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src={starImg} alt="Star icon"/>
            <p>{ vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>

          <span className="lang">{original_language}</span>
          <span>•</span>

          <span className="year">
            {
              release_date ? release_date.split("-")[0] : "N/A"
            }
          </span>
        </div>
      </div>

    </div>


  )
}

export default MovieCard
