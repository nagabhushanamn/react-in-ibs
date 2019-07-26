
/*
 * 
 * 
 *  {
 *      "itemId":[{},{}]
 *  }
 * 
 */

export function reviewsReducer(state = {}, action) {
    console.log("reviews-reducer")
    let { type } = action;
    switch (type) {
        case 'LOAD_REVIEWS': {
            let { reviews, itemId } = action;
            let existingReviews = state[itemId] || []
            let newReviews = [...existingReviews, ...reviews]
            return { ...state, [itemId]: newReviews }
        }
        case 'ADD_NEW_REVIEW': {
            let { review, itemId } = action;
            let existingReviews = state[itemId] || []
            let newReviews = [...existingReviews, review]
            return { ...state, [itemId]: newReviews }
        }
        default: return state;
    }
}