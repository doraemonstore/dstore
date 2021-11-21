import React from 'react';
import {Link} from "react-router-dom";
import "./NavProduct.css";

function NavProduct(props) {
    return (
        <div className="pro-menu">
            <Link className="pro-link" to="/guitar"><button className="custom-btn btn-5">Guitar</button></Link>
            <Link className="pro-link" to="/souvenir"><button className="custom-btn btn-5">Đồ lưu niệm</button></Link>
        </div>
    );
}

export default NavProduct;