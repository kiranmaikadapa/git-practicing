import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'; // Adjust as per actual folder structure
//import ProductCard from './ProductCard.js';
import './App.css'


function App(){
  let [product, updateProduct] = useState([]);

  useEffect(
    ()=>{
      getProducts()

    },[]
  )

  async function getProducts(){
    let res = await fetch("https://fakestoreapi.com/products")
    
    let productsList = await res.json() 
    updateProduct(productsList)
    
    
  }

  if (product.length === 0){
    return(
      <h1>Fetching Data.....</h1>
    )
  }
  return(
    <>
    <div className='product-list'>
      {
        product.map((p)=><ProductCard{...p} key={p.id}></ProductCard>)
      }
    </div>
    </>
    
  )
}

export default App