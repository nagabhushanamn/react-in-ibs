



export function reqStatusReducer(state = {}, action) {
    console.log('-reqStatusReducer-reducer-')
    let { type, message } = action;
    switch (type) {
        case 'REQUEST_BEGIN': {
            return { message }
        }
        case 'REQUEST_FINISHED': {
            return { message }
        }
        case 'REQUEST_ERROR': {
            return { message }
        }
        default: return state;
    }
}