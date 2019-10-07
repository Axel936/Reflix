import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                {this.props.users.map( u => 
                        <Link to='/catalog'>
                        <span>{u.name}</span>
                        </Link> 
                )}

            </div>
        )
    }
}
export default Home;