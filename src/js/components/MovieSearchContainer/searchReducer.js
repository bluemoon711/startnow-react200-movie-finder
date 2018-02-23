const initalstate = {
    input: '',
    listMovies: [],
    detail: {},
    error: null
};

function searchReducer(state = initalstate, action) {
    let listMovies;
    const { type, payload } = action;
    switch (type) {
        case 'ADD_SEARCH_INPUT': 
            return Object.assign({}, state, { input: payload.input });
        
        case 'GET_MOVIE_PENDING':
            return state;

        case 'GET_MOVIE_FULFILLED': {                    
            return {...state, 
                    listMovies: action.payload.data.Search,
                }
        };
    
        case 'GET_MOVIE_REJECTED':
            return {...state, error: `${action.payload.message}`};
        
        case 'GET_MOVIE_DETAIL_PENDING':
            return state;

        case 'GET_MOVIE_DETAIL_FULFILLED':
            return {...state, detail: action.payload.data};
            
        case 'GET_MOVIE_DETAIL_REJECTED':
            return {...state, error: `${action.payload.message}`};

        default:
            return state;
    }
}

export default searchReducer;