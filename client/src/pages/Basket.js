import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSum, getBasketItems } from '../actions/basketItem';
import { Redirect } from 'react-router-dom';

import BasketItemsWraper from '../components/BasketItemsWraper'

const Basket = ({ basketItems,isAuthenticated, getSum, getBasketItems }) => {

    useEffect(() => {
        getBasketItems();
        getSum();
    },[]);
    //Sprawdzanie czy użytkownik jest zalogowany
    if(!isAuthenticated){
        return <Redirect to="/login"/>
    }
    return (
        <div>
            Basket
            <br/> 
            Item
            <br/>
            <BasketItemsWraper basketItems={ basketItems.basketItems }/>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    basketItems: state.basketItems
});

export default connect(mapStateToProps, { getSum, getBasketItems })(Basket);
