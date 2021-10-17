import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { ItemList } from './ItemList'
import { ItemBox } from './ItemBox'

export const ListContainer = () => {

    const {toggle, productList} = useContext(ProductContext)
    return (
        <>
            {
                (toggle)?
                    <ul className="Lists">
                        {
                            productList.map((product)=>{
                                return <li><ItemList title={product.title} price={product.price} description={product.description} image={product.image} /></li>
                            })
                        }
                    </ul>
                :
                    <ul className="Boxes">
                        {
                            productList.map((product)=>{
                                return <li><ItemBox key={`id-${product.id}`} image={product.image} title={product.title} price={product.price} /></li>
                            })
                        }
                    </ul>
                
            }
        </>
    )
}
