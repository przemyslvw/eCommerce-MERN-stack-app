import { ADD_BOOK_TABLE, ERROR_BOOK_TABLE, GET_BOOK_TABLE } from "../actions/constans";

const initialState = {};

const booktables = (state=initialState, action) => {
    const {type,payload} = action;
    switch(type) {
        default: return state;
    }
}

export default booktables;