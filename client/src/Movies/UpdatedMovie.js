import React, { useState, useEffect } from "react"

const NewObject = {
  id: 1,
  title: "",
  director: "",
  matascore: "",
  stars: ""
}

const UpdatedMovie = () => {
  const [newMovie, setNewMovie] = useState(UpdatedMovie)

  useEffect(() => {
    const id = props.match.params.id
    const movieArray = props.movie.find(movietype => `${movietype}` === id)
    if (movieArray) setItem(movieArray), [props.movie, props.match.params.id]
  })

  const changeHandler = event => {
    event.preventDefault()[event.target.name], event.target.value
    // event.persist()
    // let value = event.target.value;
    // if(event.target.name=== "movie")
    // value =parseInt(value)
  }

  setNewMovie({ ...movie, [event.target.name]: value })
  return (
    <div>
      <form>
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
