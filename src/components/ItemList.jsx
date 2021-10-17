import React from 'react'

export const ItemList = ({title, price, description, image}) => {
    return (
        <div className="List">
            <div className="List-img" style={{backgroundImage: `url(${image})`}}></div>
            <div className="List-title">
                <div className="List-name" title={title}>{title}</div>
                <div className="List-price" style={{color: "black"}}>${price}</div>
            </div>
            <div className="List-desc" title={description}>{description}</div>
        </div>
    )
}
