import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../../Context/Context'
import './Product.css'
import moment from 'moment'

const Product = () => {

  const {
    All_Product,
    AddToCart,
    About_The_Product,
  } = useContext(Context)

  const {productId} = useParams()

  const Product = All_Product.find((e) => e.id == Number(productId))

  if(Product){

    return (
      <div className='product'>
        <div className="product-image">
          <div className="product-image-list">
            <img src={Product.Image}/>
            <img src={Product.Image}/>
            <img src={Product.Image}/>
            <img src={Product.Image}/>
          </div>
          <div className="product-main-image">
            <img src={Product.Image}/>
          </div>
        </div>
        {
          About_The_Product.map((about_product) => (
        <div className="product-info-btn" key={about_product.id}>
          <p>{about_product.Descriptions}</p>
            <div className="some-info">
                {Product.is_New && Product.is_Popular ? <></> : Product.is_New ? <p>Newest Product</p> : Product.is_Popular ? <p>Popular Product</p> : <></>}
              <p>Name: {Product.Name}</p>
              <p>Category: {Product.category}</p>
              <p>Price: {Product.Price} ETB</p>
              <p>Quantity in Stoke: {Product.Stoke_Quantity}</p>
              <p>Rate: {Product.Rate} Star</p>
              <p>Posted Time:  {moment(Product.updated_at).fromNow()}</p>
              {Product.is_New && Product.is_Popular ? <p>Newest and Popular Product</p> : <></>}
            </div>
          <button className='add-to-cart-btn' onClick={() => {AddToCart(Product.id)}}>Add To Cart</button>
        </div>
        ))
      }
      </div>
  )}else{
    return <p>Page Not Found</p>
  }
}

export default Product