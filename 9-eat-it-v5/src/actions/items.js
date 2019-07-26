
import api from '../api'

export function loadItems(cat, size) {
    //..
    // let items = []
    // return { type: 'LOAD_ITEMS', items }  // sync action

    // thunk
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: "Loading items.." })
        api.loadItems()
            .then(response => {
                let items = response.data;
                dispatch({ type: 'REQUEST_FINISHED', message: "" })
                dispatch({ type: 'LOAD_ITEMS', items }) // async action˝
            })
            .catch((error) => {
                dispatch({ type: 'REQUEST_ERROR', message: error.message })
            })
    }

}