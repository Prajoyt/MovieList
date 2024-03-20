import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component{
    constructor() {
        super(); // The super keyword calls the constructor of the parent class  the constructor of React.Component class
        this.state = {
            movies : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  star: 0,
                  fav: false,
                  cart: false                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  star: 0,            
                  fav: false,
                  cart: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  star: 0,            
                  fav: false,
                  cart: false                  
                }]
            }
      }
      handleAddStars = (movie)=>{
        const {movies} = this.state;
        const movieId = movies.indexOf(movie);
        console.log(movieId);
    
        if(movies[movieId].star <5){
            movies[movieId].star += 0.5
        }
    
        this.setState({
            movies
        });
      }
    
      handleDecStars = (movie)=>{
        const {movies} = this.state;
        const movieId = movies.indexOf(movie);
    
        if(movies[movieId].star > 0){
            movies[movieId].star -= 0.5;
        }
    
        this.setState({
            movies
        })
     
      }
    
      handleToggleFav = (movie)=> {
        const {movies} = this.state;
        const movieId = movies.indexOf(movie);
    
        movies[movieId].fav = !movies[movieId].fav;
    
        this.setState({
            movies
        })
      }
    
      handleAddtocart = (movie)=> {
        const {movies} = this.state;
        const movieId = movies.indexOf(movie);
    
        movies[movieId].cart = !movies[movieId].cart;
    
        this.setState({
            movies
        })

      }
      handleRating=(title)=>{
          const{movies}=this.state;
          console.log(title);

      }


    
    render(){
        //const{title,plot,price,rating,stars,fav,cart,poster}=this.state.movies
        const{movies}=this.state;
        return(
            <>
              {/* 1st way passing  <MovieCard title={title}
                         plot={plot}
                         price={price}
                         rating={rating}
                         stars={stars}
                         fav={fav}
                         cart={cart}           
              /> */}
              {/* <MovieCard movies={this.state}/>    now looping over an array*/ }
              {/* {movies.map((movie)=>(<MovieCard movies={movie}/>))} */}
              <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {index}
                           onIncStars = {this.handleAddStars}
                            onDecStars = {this.handleDecStars}
                            onClickFav = {this.handleToggleFav}
                            onClickAddtocart = {this.handleAddtocart}
                              handleRating={this.handleRating}
                            />

            ))}              
            </div>

            </>
        )
    }
}

export default MovieList