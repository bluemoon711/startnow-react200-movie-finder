import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store){
    return {
        input: store.search.input,
        listMovies: store.search.listMovies,
        detail: store.search.detail
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);