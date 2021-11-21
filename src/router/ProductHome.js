import React from "react";
//HOT
import "./ProductHome.css";
import hot1 from "../img/img-guitar/phimdan46.JPG";
import hot2 from "../img/img-guitar/danA1600.JPG";
import hot3 from "../img/img-japan/DHC-vitaminB.JPG";
import hot4 from "../img/img-japan/DHC-DHA.JPG";
import hot5 from "../img/img-sou/mockhoa-chimcanhcut.JPG";
import hot6 from "../img/img-sou/guong-be.JPG";
// SALE
import sale1 from "../img/img-sou/dongho-baothuc1.JPG";
import sale2 from "../img/img-sou/lacchan-bonghoa.JPG";
import sale3 from "../img/img-sou/thapnhac70.JPG";
import sale4 from "../img/img-sou/vongtay-cunghoangdao.JPG";
import sale5 from "../img/img-sou/mockhoa-unicorn.JPG";
import sale6 from "../img/img-sou/sotay-paris.JPG";

function ProductHome(props) {
  return (
    <div className="prohome">
      <div className="prohome-container">
        <h3>Bán chạy</h3>
        <div className="prohome-event">
          <img src={hot1} />
          <img src={hot2} />
          <img src={hot3} />
          <img src={hot4} />
          <img src={hot5} />
          <img src={hot6} />
        </div>
      </div>
      <div className="prohome-container">
        <div className="prohome-header">
          <h3>Giảm giá</h3>
          <a href="/sale">Xem tất cả</a>
        </div>
        <div className="prohome-event">
          <img src={sale1} />
          <img src={sale2} />
          <img src={sale3} />
          <img src={sale4} />
          <img src={sale5} />
          <img src={sale6} />
        </div>
      </div>
    </div>
  );
}

export default ProductHome;
