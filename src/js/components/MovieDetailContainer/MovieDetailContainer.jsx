import React from 'react';
import { Link } from 'react-router-dom';

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { detail } = this.props; 
             
        return (
            <div className='container'>
                <Link to='/' name='return-link' className='back-link'>
                    Go back
                </Link>
                <div id={'movie'}>
                    <div className='card'>
                        <div className='card-header'>Movie Details</div>
                        <div className='card-body'>
                            <div className='col'>
                                <img className='rounded float-left img-thumbnail' src={detail.Poster} />
                            </div>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <p className='card-text>'>Movie Title: {detail.Title}</p>
                                        <p className='card-text>'>Release {detail.Year} {detail.Runtime}
                                        {detail.Genre}</p>
                                        <p className='card-text>'>Plot: {detail.Plot}</p>
                                        <p>{detail.Awards}</p>
                                        <p>MetaScore: {detail.Metascore}</p>
                                        <p>IMDB: {detail.imdbRating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetailContainer;