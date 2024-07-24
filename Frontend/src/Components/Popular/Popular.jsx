import React, { useContext } from 'react'
import './Popular.css'
import { Link } from 'react-router-dom'
import Context from '../../Context/Context'

const Popular = () => {

    const {All_Product} = useContext(Context)

  return (
    <div className='popular'>
        <h1>Pupular Products</h1>
        <div className="popular-product">
        {
            All_Product.map((item) =>{
                if(item.is_Popular){
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

export default Popular