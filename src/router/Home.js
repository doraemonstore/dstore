import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import Footer from '../components/Footer';

function Home(props) {
    return (
        <div className="home">
            <h1>DORAEMON STORE</h1>
            <Link className="link-s" to="/pro-ui">Xem tất cả sản phẩm</Link>
                <Footer/>   
        </div>
    );
}

export default Home;