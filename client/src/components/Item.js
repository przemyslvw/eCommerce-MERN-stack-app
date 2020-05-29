import React from 'react';
import { removeBasketItems,changeCount } from '../actions/basketItem';
import { connect } from 'react-redux';

const Item = ({ item: { _id,name,price,count },removeBasketItems,changeCount }) => {
    return (
        <div
        style={{ 
            width: '80vw', 
            display: 'grid', 
            justifyContent: 'space-around', 
            alignItems: 'center',
            gridTemplateColumns: '2fr 1fr 1fr .5fr .5fr' , 
            margin: '1em 0' 
        }}>
            <h4>Name: { name }</h4>
            <h4>Price: { price }</h4>
            <h4>Count: { count }</h4>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                <button 
                className="genric-btn info circle arrow" 
                onClick={() => {
                    let newCount = ++count;
                    changeCount(_id,newCount);
                }}>
                    +
                </button>

                <button
                className="genric-btn info circle arrow"
                onClick={() => {
                    if(count <= 1){
                        alert("You can't subtract");
                    } else {
                        let newCount = --count;
                        changeCount(_id,newCount);
                    }
                }}>
                    -
                </button>

            </div>
            <button 
                className="genric-btn danger circle arrow" 
                style={{ 
                    width: '50%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }} 
                onClick={() => removeBasketItems(_id)}>X</button>
        </div>
    )
}

export default connect(null, { removeBasketItems,changeCount })(Item);