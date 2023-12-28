import React from 'react';
import './EX1.css'

const FavMovie = ({title, director, year, genre, lenght, company, description, poster}) => {
    return (
        <div className="ex1">
            <h1>{title}</h1>
            <h3>{director}</h3>
            <p>{year} ‧ {genre} ‧ {lenght}</p>
            <p>Кінокомпанія: {company}</p>
            <p>{description}</p>
            <img src={poster} alt={title}/>
        </div>
    );
};

export default FavMovie;
