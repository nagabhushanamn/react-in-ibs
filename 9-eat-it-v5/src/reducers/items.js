

export function itemsReducer(state = [], action) {
    console.log('-items-reducer-')
    let { type, items } = action;
    switch (type) {
        case 'LOAD_ITEMS': {
            return [...items]
        }
        default: return state;
    }
}