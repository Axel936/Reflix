import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movee from "./Movee";
class Movies extends Component {
  render() {
    return (
      <div className="movies-container">
          {/* if array not empty display h1 */}
          <h1>{this.props.array.length ? this.props.h1 : null}</h1>
        {this.props.array.map(movie => (
          <div>

            <Link to={`${this.props.url}/${movie.id}`}>
              <Movee movie={movie} />
            </Link>
            <button name='Add Movie' onClick={this.props.onClick}>{this.props.buttonHtml} {movie.title}</button>
          </div>
        ))}
      </div>
    );
  }
}
export default Movies;
