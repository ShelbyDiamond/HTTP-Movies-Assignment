import React, { useState, useEffect } from "react"

const newObject = {
  id: 1,
  title: "",
  director: "",
  matascore: "",
  stars: ""
}

const UpdatedMovie = () => {
  const [movie, setMovie] = useState(UpdatedMovie)

  useEffect(() => {
    const id = props.match.params.id
    const movieArray = props.movie.find(movietype => `${movietype}` === id)
    if (movieArray) setItem(movieArray), [props.movie, props.match.params.id]
  })

  const changeHandler = event => {
    event.persist()[event.target.name], event.target.value
    let newMovie = event.target.name
    if (event.target.name === "movie") newMovie = parseInt(data, ...data)
  }

  setMovie({ ...movie, [event.target.name]: value })

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .put(`http://localhost:5000/update-movie/${id}`)
      .then(response => {
        console.log(response)
        setMovie(newObject)
        props.updateItem(response.data)
        props.history.push("/update-movie")
      })
      .catch(error => {
        console.log("I am broken!", error)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="movie"
          name="name"
          onchange={changeHandler}
        />
      </form>
    </div>
  )
}

export default UpdatedMovie
