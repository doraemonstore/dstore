import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Guitar from "./router/Guitar";
import Sale from './router/Sale';
import Souvenir from "./router/Souvenir";
import ProductHome from './router/ProductHome';
import ProductDetails from './router/ProductDetails';
import NavProduct from './components/NavProduct';

function ProductUI(props) {
    return (
        <Router>
            <NavProduct/>
            <Route exact path="/pro-ui" component={ProductHome}/>
            <Route path="/guitar" component={Guitar}/>
            <Route path="/sale" component={Sale}/>
            <Route path="/souvenir" component={Souvenir}/>
            <Route path="/product-details" component={ProductDetails}/>
        </Router>
    );
}

export default ProductUI;