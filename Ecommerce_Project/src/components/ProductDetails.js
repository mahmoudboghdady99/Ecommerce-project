import React from 'react'
import {  useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Product from './Product'
export default function ProductDetails() {
const [product, setProduct] =useState({})    
useEffect(() => {
    const api_url="https://fakestoreapi.com/products"
    fetch(`${api_url}/${Params.productId}`)
    .then((res) => res.json())
    .then((data) => {
        setProduct(data)
    })
}, [])    

    let Params =useParams()
    console.log(Params);
  return (
    <>
     <div className='row'>
      <div className='col--sm-12 offset-lg-4 offset-md-4 col-md-4 col-lg-4 photo'>
       <Product product={product} showButton={false}/>
      </div>
     </div>
    </>
  )
}
