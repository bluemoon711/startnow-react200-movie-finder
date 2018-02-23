const axios = require('axios');

export function addSearchInput(input) {
    return {
        type: 'ADD_SEARCH_INPUT',
        payload: { input }
    }
}

export function fetchMovie(input) {
    var str = input.replace(/\s/g,'+');
    const url = 'http://www.omdbapi.com/?s='+ str + '&apikey=8730e0e';
    return {
        type: 'GET_MOVIE',
        payload: axios.get(url)
    }
}


export function getMovie(value) {
    const url = 'http://www.omdbapi.com/?i='+ value + '&apikey=8730e0e';
    return {
        type: 'GET_MOVIE_DETAIL',
        payload: axios.get(url)
    }
}