import React from 'react';
import { useState, useEffect } from "react";
import ProductJapan from "../components/ProductJapan";
import "../App.css"

const fetchURL = "https://615c0904c298130017735e88.mockapi.io/japan";
const getItems = () => fetch(fetchURL).then((res) => res.json());

function Japan(props) {
    const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  return (
    <div className="japan">
      <p style={{color:"white"}}><i>*Để biết thêm thông tin chi tiết hoặc đặt mua sản phẩm, vui lòng liên hệ trực tiếp facebook Ceci Kim Chi hoặc truy cập ngay <a href="https://www.facebook.com/profile.php?id=100053748583068" target="_blank">TẠI ĐÂY</a></i></p>
    <section className="container">
      <div className="products" >
      {items.map((item) => (
        <ProductJapan
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
    </div>
  );
}

export default Japan;