import React from "react";

class MovieCard extends React.Component {
  
  // addStars(){
  //     console.log('this', this)
  // }

  addStars = () => {
    //form1
    // this.setState({
    //     stars:this.state.stars+0.5,
    //   })

    if(this.state.stars>=5){
        return;
    }
    //form2
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    },()=>{console.log(this.state.stars,'callback inside ')});
    
    console.log(this.state.stars,'outside setStars');

    //    this.state.stars+=0.5;
    //    console.log('this',this.state.stars); -->not displaying on ui because it is not re rendering so we use setstate
  };

  minusStars = () => {
    // console.log(this,'this');
if(this.state.stars<=0){
    return;
}
this.setState({
    stars:this.state.stars-0.5,
})

    //form:2
    // this.setState((prevState) => {
    //   return {
    //     stars: prevState.stars - 0.5,
    //   };
    // });
  };

  handleFav=()=>{
   this.setState({
    fav:!this.state.fav
   })
  }

  handleCart=()=>{
    this.setState({
        cart:!this.state.cart
    })
  }


  render() {
    /*if we want to change the name of movies to data that can be done in folowing way
    const{movies:data}=this.props;
    console.log(data);
    const { plot, price, rating, stars,fav,cart } = data;*/

const{plot,price,rating,stars,fav,cart}=this.props.movies

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2ZW5nZXJ8ZW58MHx8MHx8fDA%3D"
            />
          </div>
          <div className="right">
            <div className="title">{this.props.movies.title}</div>
            <div className="plot">{plot}</div>
            <div className="price"> Rs.{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  className="str-btn"
                  alt="Minus"
                  onClick={this.minusStars}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                  alt="Stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                  className="str-btn"
                  alt="Plus"
                  //onClick={this.addStars.bind(this)}
                  onClick={this.addStars}
                />
                <span>{stars}</span>
              </div>
              
              <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={this.handleFav}>{fav?'UnFavourite':'Favourite'}</button>

             
              
              {cart?<button className="uncart-btn" onClick={this.handleCart}>Remove from Cart:</button>:<button className="cart-btn" onClick={this.handleCart}>Add to Cart</button>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
