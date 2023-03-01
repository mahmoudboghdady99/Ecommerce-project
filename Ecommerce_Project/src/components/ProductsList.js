import React from 'react'
import Product from './Product'
import {useState, useEffect} from 'react'

export default function ProductsList() {
  let [products, setProducts]=useState([]);
const url_api=("https://fakestoreapi.com/products")
useEffect(() => {
  fetch(url_api)
  .then((respons) => respons.json())
  .then((data) => setProducts(data))
},[])
  return (
    <div className='text-center mt-4 ' >
             <h2 >Our Products</h2>
        <div className='row'>
          {products.map((product) => {
            return(
              <div className='col-4' key={product.id}>
              <Product product={product} shoeButon={true}/>
          </div>
            )
          })}
             
              
      </div>
    </div>
  )
}
