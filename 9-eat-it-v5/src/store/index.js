


import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    // other store enhancers if any
    applyMiddleware(thunk)
));

export default store;