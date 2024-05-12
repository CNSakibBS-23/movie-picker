import React from 'react';
import data from '../../data/movies.json'
import { ShowMovies } from '../Styles/Movies.styles';
import Movie from './Movie';
const Movies = () => {
    return (
        <ShowMovies>
            {
                data.map(movie => <Movie key={movie.id} movie={movie}></Movie>)
            }
        </ShowMovies>
    );
};

export default Movies;