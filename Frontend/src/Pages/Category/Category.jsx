import React, { useContext } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import Context from '../../Context/Context';


const Category = ({ categoryBanner, categoryName }) => {
  const {  All_Product } = useContext(Context);

  return (
    <div className="category">

      <img src={categoryBanner}/>

      <div className="product-list">
        {All_Product.map((product) => {
          if (categoryName === product.category) {
            return (
              <Link to={`/product/${product.id}`} key={product.id}>
                <img src={product.Image}/>
                <div className="product-info">
                  <p>{product.Name}</p>
                  <p>{product.Price} ETB</p>
                </div>
              </Link>
            )
          }
        })}
      </div>
    </div>
  );
};

export default Category;