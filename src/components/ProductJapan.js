import React from "react";
import "../components/Product.css";
import { Link } from "react-router-dom";

function ProductJapan({ id, name,desc, pic, price }) {
  return (
    <div className="product">
      <Link to={{
        pathname:"/product-details",
        state:{
          name,
          pic,
          price,
          desc
        }
      }}>
      <img src={pic} alt={name} title={name}/>
      </Link>
      <div className="product-details">
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ProductJapan;
