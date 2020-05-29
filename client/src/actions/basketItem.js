import { GET_SUM, GET_BASKET_ITEMS, REMOVE_BASKET_ITEMS, ADD_BASKET_ITEMS, ERROR_BASKET_ITEMS } from './constans';
import axios from 'axios';

export const getBasketItems = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/basket');
        dispatch({
            type: GET_BASKET_ITEMS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ERROR_BASKET_ITEMS,
            payload: error
        })
    }
}

export const addBasketItem = (name,price,count,sku) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ name,price,count,sku });
        await axios.post('http://localhost:5000/api/basket',body,config);
        dispatch(getBasketItems());
    } catch (error) {
        dispatch({
            type: ERROR_BASKET_ITEMS,
            payload: error
        });
    }
}

export const removeBasketItems = (item_remove) => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:5000/api/basket/${item_remove}`);
        dispatch({
            type: REMOVE_BASKET_ITEMS,
            payload: res.data
        });
        dispatch(getBasketItems());
    } catch (error) {
        dispatch({
            type: ERROR_BASKET_ITEMS,
            payload: error
        })
    }
}

export const getSum = () => async dispatch => {
    try {
        const res = await axios.put('http://localhost:5000/api/basket/sum_prices');
        dispatch({
            type: GET_SUM,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ERROR_BASKET_ITEMS,
            payload: error
        })
    }
}

export const changeCount = (id,new_count) => async dispatch => {
    try {
        await axios.put(`http://localhost:5000/api/basket/changeCount/${id}/${new_count}`);
        dispatch(getBasketItems());
    } catch (error) {
        dispatch({
            type: ERROR_BASKET_ITEMS,
            payload: error
        });
    }
}
