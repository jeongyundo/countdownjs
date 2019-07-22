import React, {Component} from 'react'; 
import propTypes from 'prop-types'
import './Movie.css';


class Movie extends Component{



    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired,
        genres: propTypes.array.isRequired,
        synopsis: propTypes.string.isRequired
    }


    render(){
        console.log(this.props);
        return(
            <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster poster={this.props.poster} alt={this.props.title}></MoviePoster>
                </div>
                <div className="Movie__Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre genres={genre} key={index}> </MovieGenre>)}
                    </div>
                    <p className="Movie__Synopsis">
                        {this.props.synopsis}
                    </p>
                </div>
            </div>
            
        )
        
    };
};

class MoviePoster extends Component{

    static propTypes = {
        poster: propTypes.string.isRequired,
        alt: propTypes.string.isRequired
    }
    render(){

        return(
            <img src={this.props.poster} alt={this.props.alt} title={this.props.title} className="Movie__Poster"></img>
        )
    };
};


class MovieGenre extends Component{

    static propTypes = {
        genres: propTypes.string.isRequired
    }
    render(){
        return(
            <span className="Movie__Genres">{this.props.genres}</span>
        )
    }
}

export default Movie;