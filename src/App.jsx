import React, {useEffect, useState} from "react";
import './scss/App.scss'
import { ProductsPage } from './components/ProductsPage/ProductsPage';
import { ProductContext } from './context/ProductContext'

export default function App() {
  const [productList, setProductList] = useState([])
  const [toggle, setToggle] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchData= async ()=>{
    try{
      const response = await fetch('https://fakestoreapi.com/products')
      let apiData = await response.json()
      setProductList(apiData)
      setLoading(true)
    }catch(err){
      console.log("fetch fail!!")
    }
  }

  useEffect(()=>{
    fetchData()
    console.log("fetch data =>", productList)
  }, [toggle])

  return (
    <div className="App">
      <ProductContext.Provider value={{productList, toggle, setToggle, loading}}>
        <ProductsPage />
      </ProductContext.Provider>
    </div>
  );
};
