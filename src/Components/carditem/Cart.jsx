import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Shoppingcontext } from '../../Shoppingcontext';

const CartItem = () => {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState({});
  const { addToCart } = useContext(Shoppingcontext);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data)) // Ensure you're setting the right data
  }, []);

  const toggleShowMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="container section" style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
      {Array.isArray(products) &&
        products.slice(0, 6).map((product) => (
          <div className="row" key={product.id}>
            <div className="card">
              <img src={product.image} alt="Card Image" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">{product.title}</h2>
                <p className={expanded[product.id] ? 'full-text' : 'truncated-text'}>
                  {product.description}
                </p>
                <button className="card-btnn" onClick={() => toggleShowMore(product.id)}>
                  {expanded[product.id] ? 'See Less' : 'See More'}
                </button>
                <Link to={`/product/${product.id}`} className="card-btn" >buy Info</Link>
                <Link className='card-btn' onClick={() => addToCart(product)} to={'/buy'}
                > Buy</Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartItem;
