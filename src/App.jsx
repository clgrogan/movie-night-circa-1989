import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieSection from './components/MovieSection'

const App = () => {
  // Globalish Variables
  const [movies, setMovies] = useState([])

  // Globalish Functions
  const getMovieDataFromAPI = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=2f5e9aad3941088551c3f873a275fba0&language=en-US-US&region=US&sort_by=release_date.asc&include_adult=false&primary_release_year=1989&sort_by=popularity.desc'
    )
    setMovies(resp.data.results)
  }

  // Compare function for array sort
  const compare = (a, b) => {
    const release_dateA = a.release_date.toUpperCase()
    const release_dateB = b.release_date.toUpperCase()

    let comparison = 0
    if (release_dateA > release_dateB) {
      comparison = 1
    } else if (release_dateA < release_dateB) {
      comparison = -1
    }
    return comparison
  }

  //Execute on render
  useEffect(() => {
    getMovieDataFromAPI()
  }, [])

  return (
    <>
      {console.log('test', movies.sort(compare))} */}
      <heading>
        <h1 className="page-title">At the Movie's Circa 1989</h1>
      </heading>
      <main>
        <section className="main-section">
          {movies.map(movie => {
            return (
              <MovieSection
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
              />
            )
          })}
        </section>
      </main>
    </>
  )
}

export default App
