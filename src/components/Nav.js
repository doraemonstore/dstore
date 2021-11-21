import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="menu">
          <Link className="link-menu-s" to="/"><li>Trang chủ</li></Link>
          <Link className="link-menu-s" to="/about"><li>Giới thiệu</li></Link>
          <Link className="link-menu-s" to="/pro-ui"><li>Sản phẩm</li></Link>
          <Link className="link-menu-s" to="/fjapan"><li style={{color:"#f8bbd0"}}>Hàng Nhật order</li></Link>
    </div>
  );
}

export default Nav;
