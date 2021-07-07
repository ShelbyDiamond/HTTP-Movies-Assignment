import React, { useState, useEffect } from "react"
import axios from "axios"

const UpdatedMovie = props => {
  const newObject = {
    id: 0,
    title: "",
    director: "",
    matascore: 0,
    stars: []
  }
  const [movie, setMovie] = useState(newObject)

  useEffect(() => {
    const id = props.match.params.id
    const movieArray = props.movie.find(movietype => `${movietype.id}` === id)
    if (movieArray) setMovie(movieArray)
  }, [props.movie, props.match.params.id])

  const changeHandler = event => {
    event.preventDefault()
    // [event.target.name], event.target.value
    // let newMovie = event.target.name
    // if (event.target.name === "movie") newMovie = parseInt(movie, ...movie)
    setMovie({ ...movie, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(response => {
        console.log("put request", response)
        const movieName = props.movies.filter(
          moviest => moviest.id !== movie.id
        )
        props.setMovies([...movieName, response.data])
        //  setMovie(newObject)
        //   props.updateItem(response.data)
        props.history.push("/")
      })
      .catch(error => {
        console.log("I am broken!", error)
      }, [])
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update Movie"
          name="title"
          onChange={changeHandler}
          value={movie.title}
        />
        <input
          type="text"
          placeholder="Update director"
          name="director"
          onChange={changeHandler}
          value={movie.director}
        />
        <input
          type="number"
          placeholder="Update Meta Score"
          name="metascore"
          onChange={changeHandler}
          value={movie.metascore}
        />
        <input
          type="text"
          placeholder="Update stars"
          name="stars"
          onChange={changeHandler}
          value={movie.stars}
        />
      </form>
    </div>
  )
}

export default UpdatedMovie
