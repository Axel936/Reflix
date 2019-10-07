import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movee from "./Movee";

class Calalog extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          cost: 10,
          id: 0,
          isRented: false,
          title: "Tarzan",
          year: 1999,
          img:
            "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
          descrShort:
            "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out."
        },
        {
          cost: 10,
          id: 1,
          isRented: false,
          title: "The Lion King",
          img:
            "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
          year: 1994,
          descrShort:
            "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies."
        },
        {
          id: 2,
          cost: 10,
          isRented: false,
          title: "Beauty and the Beast",
          year: 1991,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
          descrShort:
            "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself."
        },
        {
          cost: 10,
          id: 3,
          isRented: false,
          title: "The Sword in the Stone",
          year: 1963,
          img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
          descrShort:
            "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means."
        },
        {
          cost: 10,
          id: 4,
          isRented: false,
          title: "Beauty and the Beast",
          year: 2016,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
          descrShort:
            "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation."
        }
      ],
      rentedMovies: [

      ],
      budget: 20
    };
  
  }
  addMovie = (e) => {
    let movieName = e.target.innerText.replace(/^Rent (.*$)/, '$1')
    let movie = this.state.movies.find(m => m.title == movieName)
    
	   if (this.state.budget - movie.cost >= 0 ){
		  if (!this.state.rentedMovies.find(movie => movie.title == movieName)){
        this.setState({budget: this.state.budget -+ 10})
			  let rentedMovies = [...this.state.rentedMovies]
			  rentedMovies.push(movie)
			  this.setState({rentedMovies})
		  }
	  } else {
      alert("you done have enough fund to rent that movie")
    }
  }

  delMovie = (e) => {
    let movieName = e.target.innerText.replace(/^Unrent (.*$)/, '$1')
    
    let rentedMovies = [...this.state.rentedMovies]
    for (const index in rentedMovies) {
        const movie = rentedMovies[index];
        if (movie.title === movieName) {
          rentedMovies.splice(index,1)
        }
        
      }
      this.setState({rentedMovies})
    }
  


  render() {
    return (
      <div>
        
        <br />
        <div className="rented">
        {this.state.rentedMovies.map(movie => (
          <div>
          <Link to={`${this.props.match.url}/${movie.id}`}>
            <Movee movie={movie} addMovie={this.props.addMovie} />
          </Link>
          <button onClick={this.delMovie}>Unrent {movie.title}</button>
        
          <br/>
          <br/>

        </div>
        
        ))}
      -------------------------------------
        </div>
        <div className="movies-con">
          {this.state.movies.map(movie => (
            <div>
            <div>Movies</div>
            <div>
              <Link to={`${this.props.match.url}/${movie.id}`}>
                <Movee movie={movie} addMovie={this.props.addMovie} />
              </Link>
              <button onClick={this.addMovie}>Rent {movie.title}</button>
              <br/>
              <br/>

            </div>

            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Calalog;
