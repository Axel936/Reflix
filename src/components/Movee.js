import React, { Component } from 'react';
class Movee extends Component {


    render() {
        return (
            <div className="movie" >
                <div>{this.props.movie.title}</div>
                <img src={this.props.movie.img} alt="" />
              </div>
        )
    }
}
export default Movee;