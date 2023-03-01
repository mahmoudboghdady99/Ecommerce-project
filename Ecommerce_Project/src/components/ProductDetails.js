import React from 'react'
import { Params, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
    <h2>
      product Details :  the Tilte is : {product.title} 
    </h2>
    <h2>
    productId is : {Params.productId}
    </h2>
    </>
  )
}
