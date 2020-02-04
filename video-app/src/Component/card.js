import React from 'react';

function Card(props){
   return(
   <div>
        <h1>{props.title}</h1>
        <img src={props.poster_path} alt={props.title}/>
        <p>{props.overview}</p>
        <p>Release date: {props.release_date}</p>
        <p>Rating: {props.vote_average}; Original language: {props.original_language}</p>
    </div>
   );
}

export default Card;