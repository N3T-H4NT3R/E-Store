import React, { useContext } from 'react'
import './NewProduct.css'
import { Link } from 'react-router-dom'
import Context from '../../Context/Context'

const NewProduct = () => {

    const {All_Product} = useContext(Context)

  return (
    <div className='new' id='newest-product'>
    <h1>New Products</h1>
    <div className="new-product">
        {
        All_Product.map((item) =>{
            if(item.is_New){
                return(
                    <Link to={`product/${item.id}`} key={item.id}>
                        <img src={item.Image}/>
                        <div className="product-info">
                            <p>{item.Name}</p>
                            <p>${item.Price}</p>
                        </div>
                    </Link>
            )}
        })}
    </div>

</div>
  )
}

export default NewProduct