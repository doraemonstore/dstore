import React from "react";
import "../components/Product.css";

function ProuctJapan({ id, name,desc, pic, price }) {
  return (
    <div className="product">
      <img src={pic} alt={name} title={name}/>
      <div className="product-details">
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ProuctJapan;
