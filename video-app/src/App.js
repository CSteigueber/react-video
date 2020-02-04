import React, { useState, useEffect } from 'react';
import {Key} from './key';
import './App.css';
import axios from 'axios';
import Card from './Component/card';
import Search from './Component/search';


const App = () => {
 
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Key}&language=en-US`;
    const [movies, setMovie] = useState([]);
    useEffect(() => {
      axios.get(url).then(json => setMovie(json.data.results));
    });

    const search = async() =>{
      let str= document.getElementById("search").value;
      const url_search= `https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${str}`;
      axios.get(url_search).then(response => setMovie(response.data.results));  
    }

    const renderCard =() =>{
      return (movies.map(movie =>{
        return (
          <div className="cards" key={movie.id}>
            <Card title= {movie.title} overview={movie.overview} poster_path={'http://image.tmdb.org/t/p/w185//'+movie.poster_path} release_date={movie.release_date}
            vote_average={movie.vote_average} original_language={movie.original_language.toUpperCase()} />
          </div>
        );
      }));
    }
    
    
    return (
      <div className="App">
      <Search event={search} />
          {renderCard()}
    </div>
  );
}

export default App;
