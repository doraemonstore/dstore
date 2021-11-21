import React from "react";
import "../components/Product.css";
import { Link } from "react-router-dom";

function SaleProduct({ id, name,saleprice, pic, price }) {
  return (
    <div className="product">
      <img src={pic} alt={name} title={name}/>
      <div className="product-details">
        <h4>{name.slice(0,20)}...</h4>
        <p style={{textDecoration:"line-through"}}>{price}</p>
        <p>{saleprice}</p>
      </div>
    </div>
  );
}

export default SaleProduct;
