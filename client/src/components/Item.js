import React from 'react'

const Item = ({ item: { _id,name,price,count } }) => {
    return (
        <div>
            <h4>Name: { name }</h4>
            <h4>Price: { price }</h4>
            <h4>Count: { count }</h4>
        </div>
    )
}

export default Item
