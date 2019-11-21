import React from 'react'

const MovieSection = props => {
  const altText = 'Movie poster for ' + props.title
  const imgSrc =
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + props.poster_path
  return (
    <section className="movie-section">
      <h1 className="movie-title">{props.title}</h1>
      <h2 className="release-date"> {props.release_date}</h2>
      <img
        className="movie-poster"
        // src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg"
        src={imgSrc}
        alt={altText}
      ></img>
      <p className="movie-overview">{props.overview}</p>
    </section>
  )
}

export default MovieSection
