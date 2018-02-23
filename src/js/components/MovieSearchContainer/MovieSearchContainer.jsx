import React from 'react';
import { addSearchInput, fetchMovie, getMovie } from './searchAction';
import { Link } from 'react-router-dom';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(addSearchInput(value));
    }

    handleClick(e) {
        e.preventDefault();
        const { input, dispatch } = this.props;
        dispatch(fetchMovie(input));
    }

    handleLink(id) {
        const { dispatch } = this.props;
        //console.log({value});
        //dispatch(getMovie(e.target.getAttribute('value')));
        dispatch(getMovie(id));
    }

    render() {
        const { input, listMovies, detail } = this.props;
        
        return (
            <div>
                <h1>Movie Finder</h1>
                <div className='row'>
                    <div className='col-12 col-md-12 mb-4'>
                        <div className='input-group'>
                            <input placeholder='Enter a movie name' type='text' className='form-control'
                                onChange={this.handleInput} value={input} />
                            <span className='input-group-btn'>
                                <button className='btn btn-primary' type="button" onClick={this.handleClick}>Go!</button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-12 mb-4'>
                        {listMovies.length !== 0 && listMovies.map((listMovie, index) =>
                            <li key={index} >
                                <div className='card'>
                                    <div className='card-header'>Movie Details</div>
                                    <div className='card-body'>
                                        <div className='col'>
                                            <img className='rounded float-left img-thumbnail' src={listMovie.Poster} />
                                        </div>
                                        <div className='col'>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <p className='card-text>'>Movie Title: {listMovie.Title}</p>
                                                    <p className='card-text>'>release year: {listMovie.Year}</p>
            
                                                    <Link to={`/movie/${listMovie.imdbID}`} className='btn btn-outline-secondary' type='button'
                                                        value={listMovie.imdbID} onClick={() => this.handleLink(listMovie.imdbID)} >
                                                        More Information </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieSearchContainer;