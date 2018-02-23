import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store){
    return {
       detail: store.search.detail
    };
}

export default connect(mapStoreToProps)(MovieDetailContainer);