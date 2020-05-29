import { GET_SUM, GET_BASKET_ITEMS, REMOVE_BASKET_ITEMS, ADD_BASKET_ITEMS } from '../actions/constans';

const initialState = {
    basketItems: [],
    sum: 0
}

const basketItems = (state = initialState, action) => {
    const { type,payload } = action;
    switch(type){
        case GET_BASKET_ITEMS:
            return{
                ...state,
                basketItems: payload
            }
        case GET_SUM:
            return{
                ...state,
                sum: payload
            }
        default:
            return state;
    }
}

export default basketItems;