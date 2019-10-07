import React, { Component } from 'react';
class Movie extends Component {
    render() {
        let movies = this.props.movies
        let match = this.props.match
        let movie = movies[parseInt(match.params.movieID)]
        return (
            <div className="">
                <div>{movie.title}-{movie.year}</div> 
                <img src={movie.img} alt={movie.title + 'lovely movie cover'} />
                <div>{movie.descrShort}</div>
            </div>
        )
    }
}
export default Movie;