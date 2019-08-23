import React from "react"
import axios from "axios"
import MovieCard from "./MovieCard"
// import handleSubmit from "../Movies/UpdatedMovie"

export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      props: props
    }
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id)
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => this.setState({ movie: response.data }))
      .catch(error => console.log(error.response))
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList
    addToSavedList(this.state.movie)
  }
  updateMovie = event => {
    event.preventDefault()
    //console.log(this.state)
    //     axios
    //     .put(`http://localhost:5000/api/movies/update-movie/${movie.id}`)
    //     .then(response => {
    //       console.log(response)
    //       setMovie(newObject)
    //       props.updateItem(response.data)
    //       props.history.push("/update-movie")
    //     })
    //     .catch(error => {
    //       console.log("I am broken!", error)
    //     }, [])
    // }
    // setMovie([...movie, movie])
    this.state.props.history.push(`/update-movie/${this.state.movie.id}`)
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>
    }

    // const updateMovie = movieNew => {}

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <button onClick={this.updateMovie}>Update</button>
      </div>
    )
  }
}
