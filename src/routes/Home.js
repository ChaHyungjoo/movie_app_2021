import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie"
import "./Home.css"


class Home extends Component {
  state = {
    isLoding : true,
    movies : []
  }

  getMovies =  async () => {
    const { 
      data : { 
        data : { movies } 
      } 
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    
    this.setState({ movies : movies , isLoding : false });
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoding, movies } = this.state;
    return(
      <section className="container">
        { isLoding ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map( movie => (
              <Movie 
                key={ movie.id } 
                id={ movie.id } 
                year={ movie.year } 
                title={ movie.title } 
                summary={ movie.summary } 
                poster={ movie.medium_cover_image } 
                genres={ movie.genres } 
              />
            ))}
          </div>
          
        ) }
      </section>
    )
  }
}

export default Home;
