import React from 'react';
import Item from './Item';


const BasketItemsWraper = ({ basketItems }) => 
    basketItems !== [] &&
    basketItems !== null &&
    basketItems.map(item => <Item item={ item } key={ item._id }/>)
export default BasketItemsWraper
