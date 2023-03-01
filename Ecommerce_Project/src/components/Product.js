import React from 'react'

export default function Product(props) {

 const {product, showButton} = props
  return (
    <div>
      <div className="card  item mb-5">
              <img src={product.image} className="card-img-top " alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              {showButton && <button href="/#" className="btn btn-primary">Details</button>}
              
          </div>
      </div>
    </div>
  )
}
