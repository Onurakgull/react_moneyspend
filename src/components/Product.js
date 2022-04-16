import React from 'react'

const Product = ( { product }) => {
  return (
    <div>
        <ul>
            <li>
            { product.title }
            </li>
        </ul>
    </div>
  )
}

export default Product