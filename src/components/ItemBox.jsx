import React from 'react'

export const ItemBox = ({title, image, price}) => {
    return (
        <div className="Box">
            <div className="product-img" style={{backgroundImage: `url(${image})`}}></div>
            <div className="product-name" title={title}>{title}</div>
            <div className="price">${price}</div>
        </div>
    )
}