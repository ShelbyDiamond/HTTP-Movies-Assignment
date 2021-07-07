import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import SavedList from "./Movies/SavedList"
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import UpdatedMovie from "./Movies/UpdatedMovie"
import axios from "axios"

const App = () => {
  const [savedList, setSavedList] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(results => {
        console.log(results.data)
        setMovies(results.data)
      })
      .catch(error => console.log(error.response))
  }, [])

  // const deleteMovie = id => {
  //   axios.delete(`http://localhost:5000/api/movies/${id}`).then(response => {
  //     console.log(response)
  //     const newMovies = movies.filter(mov => mov.id !== id)
  //     setMovies([...newMovies])
  //   })
  // }

  const addToSavedList = movie => {
    setSavedList([...savedList, movie])
  }

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdatedMovie {...props} movies={movies} />
        }}
      />
    </>
  )
}

export default App
