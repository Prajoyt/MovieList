import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import "./index"
import { movies } from "./moviesData"

class App extends React.Component {
  constructor() {
    super(); // The super keyword calls the constructor of the parent class  the constructor of React.Component class
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }
  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    console.log(movieId);

    if (movies[movieId].star < 5) {
      movies[movieId].star += 0.5
    }

    this.setState({
      movies
    });
  }

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].star > 0) {
      movies[movieId].star -= 0.5;
    }

    this.setState({
      movies
    })

  }

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies
    })
  }

  handleAddtocart = (movie) => {
    let { movies, cartCount } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].cart = !movies[movieId].cart;
    if (movies[movieId].cart) {
      cartCount = cartCount + 1
    } else {
      cartCount -= 1;
    }

    this.setState({
      movies,
      cartCount
    })
    console.log(cartCount);

  }
  // handleRating=(title)=>{
  //     const{movies}=this.state;
  //     console.log(title);

  // }
  render() {
    const { movies ,cartCount} = this.state
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList movies={movies}
          onIncStars={this.handleAddStars}
          onDecStars={this.handleDecStars}
          onClickFav={this.handleToggleFav}
          onClickAddtocart={this.handleAddtocart}
        />
      </>
    )

  }
}

export default App;
