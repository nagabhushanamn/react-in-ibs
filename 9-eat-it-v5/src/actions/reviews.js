
import api from '../api'

export function loadReviews(itemId, size) {
    //..

    // let reviews = [
    //     { stars: 1, author: 'Nag', body: 'bla bla' },
    //     { stars: 1, author: 'Nag', body: 'bla bla' }
    // ]
    // return { type: 'LOAD_REVIEWS', itemId, reviews }


    // thunk
    return function (dispatch) {
        api.loadReviews(itemId)
            .then(response => {
                let reviews = response.data;
                dispatch({ type: 'LOAD_REVIEWS', itemId, reviews }) // async action˝
            })
    }

}

export function addNewReview(itemId, review) {
    //..
    return { type: 'ADD_NEW_REVIEW', itemId, review }

}