import React from 'react';
import { useState, useEffect } from "react";
import Products from "../components/Product";
import "../App.css"

const fetchURL = "https://615c0904c298130017735e88.mockapi.io/souvenir";
const getItems = () => fetch(fetchURL).then((res) => res.json());

function Souvenir(props) {
    const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  return (
    <section className="container">
      <div className="products" >
      {items.map((item) => (
        <Products
          key={item.id}
          id={item.id}
          name={item.name}
          desc={item.desc}
          pic={item.picture}
          price={item.price}
        />
      ))}
    </div>
    </section>
  );
}

export default Souvenir;