

export function cartReducer(state = {}, action) {
    console.log('cart reducer')
    let { type } = action;
    switch (type) {
        case 'BUY': {
            let { item, qty } = action;
            qty = qty || 1;
            let { id } = item;
            let cart = state;
            let itemLine = cart[id];
            if (itemLine) {
                itemLine = Object.assign({}, itemLine, { qty: itemLine.qty + qty })
            } else {
                itemLine = { item, qty: 1 }
            }
            cart = { ...cart, [id]: itemLine }
            return cart;
        }
        default: return state;
    }
}