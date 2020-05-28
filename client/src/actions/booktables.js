
import { ADD_BOOK_TABLE, ERROR_BOOK_TABLE, GET_BOOK_TABLE } from "./constans";
import axios from "axios";

export const getBookTable = (booktable_id) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:5000/api/booktables/booktable/${booktable_id}`);
        dispatch({ type: GET_BOOK_TABLE, payload: res.data})
    } catch (error) {
        dispatch({type: ERROR_BOOK_TABLE, payload: error})
    }
}

export const addBookTable = (name, email, phoneNum, people, date) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({name, email, phoneNum, people, date });
        const res = await axios.post('http://localhost:5000/api/booktables/',body,config);
        dispatch({
            type: ADD_BOOK_TABLE,
            payload: resizeBy.data
        })
    } catch (error) {
        dispatch({type: ERROR_BOOK_TABLE})
    }
}