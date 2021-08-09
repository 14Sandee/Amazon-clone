import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const addToCart = () => {
        // dispatch the item into te dataLayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product_box">
                <div className="product_details">
                    <p className="product_name">{title}</p>
                    <h6 className="product_price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </h6>
                    <div className="product_rating">
                        {Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))}
                    </div>
                    
                </div>
                <div className="product_details_center">
                    <img className="product_img" src={image} />
                    <button className="product_btn" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}


export default Product