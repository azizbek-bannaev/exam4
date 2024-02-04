import React from 'react';
import './Product.css';
import { PRODUCTS } from '../../static/index';
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className='wrapper container '>
     {
        PRODUCTS?.map((el)=> <div key={el.id} className='card'> 
        <Link to={`/product/${el.id}`}>
        <img src={el.url}  alt="" />
              </Link>
        <button>buy now</button>
        <br />
        <br />
     </div>)
     }
     
    </div>
  );
}

export default Product;
