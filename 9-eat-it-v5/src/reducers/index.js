

import { combineReducers } from 'redux'

import { itemsReducer } from './items'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'
import { reqStatusReducer } from './req-status'


const rootReducer = combineReducers({
    items: itemsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    reqStatus: reqStatusReducer
})

export default rootReducer;