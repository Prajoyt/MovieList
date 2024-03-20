import React from "react";

class MovieCard extends React.Component {
  
  // addStars(){
  //     console.log('this', this)
  // }

//   addStars = () => {
//     //form1
//     // this.setState({
//     //     stars:this.state.stars+0.5,
//     //   })

//     if(this.state.stars>=5){
//         return;
//     }
//     //form2
//     this.setState((prevState) => {
//       return {
//         stars: prevState.stars + 0.5,
//       };
//     },()=>{console.log(this.state.stars,'callback inside ')});
    
//     console.log(this.state.stars,'outside setStars');

//     //    this.state.stars+=0.5;
//     //    console.log('this',this.state.stars); -->not displaying on ui because it is not re rendering so we use setstate
//   };

//   minusStars = () => {
//     // console.log(this,'this');
// if(this.state.stars<=0){
//     return;
// }
// this.setState({
//     stars:this.state.stars-0.5,
// })

//     //form:2
//     // this.setState((prevState) => {
//     //   return {
//     //     stars: prevState.stars - 0.5,
//     //   };
//     // });
//   };

//   handleFav=()=>{
//    this.setState({
//     fav:!this.state.fav
//    })
//   }

//   handleCart=()=>{
//     this.setState({
//         cart:!this.state.cart
//     })
//   }


  render() {
    /*if we want to change the name of movies to data that can be done in folowing way
    const{movies:data}=this.props;
    console.log(data);
    const { plot, price, rating, stars,fav,cart } = data;*/

const{title,plot,price,rating,star,fav,cart,poster}=this.props.movies
const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars,handleRating} =  this.props
    return (
        //Movie Card
        <div className="movie-card">

        {/**Left section of Movie Card */}
        <div className="left">
            <img alt="poster" src={poster} />
        </div>
        
        {/**Right section Movie Card */}
        <div className="right">

            {/**Title, plot, price of the movie */}
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>

            {/**Footer starts here with ratings, stars and buttons */}
            <div className="footer">
                <div className="rating" onClick={()=>handleRating(title)}>{rating}</div>

                {/**Star image with increase and decrease buttons and star count */}
                <div className="star-dis">
                    <img className="str-btn" 
                        alt="Decrease" 
                        src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                        onClick={() => onDecStars(movies)}
                    />
                    <img className="stars" 
                            alt="stars" 
                            src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                    />
                    <img className="str-btn" 
                        alt="increase" 
                        src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                        // No binding required as addStars() is an arrow function
                        onClick={() => onIncStars(movies)}
                    />
                    <span className="starCount">{star}</span>
                </div>

                {/**conditional rendering on Favourite button */}
                <button className={fav?"unfavourite-btn":"favourite-btn"}  
                        onClick={() => onClickFav(movies)}> 
                            
                            {fav ? "Un-favourite":"Favourite"}

                </button>
                    
                {/**Conditional Rendering on Add to Cart Button */}
                <button className={cart?"unfavourite-btn":"cart-btn"}  
                        onClick={() => onClickAddtocart(movies)}>
                            
                                {cart ? "Remove from Cart":"Add to Cart"}

                </button>
                
            </div>
        </div>

    </div>
  
);
    
  }
}
export default MovieCard;
