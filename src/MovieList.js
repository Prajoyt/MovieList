import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props){
   


    
    
        //const{title,plot,price,rating,stars,fav,cart,poster}=this.state.movies
        const{movies,onIncStars,onDecStars,onClickFav,onClickAddtocart}=props;
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
                           onIncStars = {onIncStars}
                            onDecStars = {onDecStars}
                            onClickFav = {onClickFav}
                            onClickAddtocart = {onClickAddtocart}
                              // handleRating={this.handleRating}
                            />

            ))}              
            </div>

            </>
        )
    }


export default MovieList