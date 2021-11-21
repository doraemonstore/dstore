import React from 'react';
import "./Footer.css";
import sublogo from "../img/footer.png";
import map from "../img/map.png";
import fb from "../img/facebook.png";
import ins from "../img/instagram.png";
import ytube from "../img/youtube.png";

function Footer(props) {
    return (
        <div className="footer">
            <div className="f-left">
                <img className="sublogo" src={sublogo} alt="This is sub-logo" width="150px"/>
                <div className="footer-icon">
                    <a href="https://www.facebook.com/profile.php?id=100053748583068" target="_blank">
                        <img src={fb}/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img src={ins}/>
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                        <img src={ytube}/>
                    </a>
                </div>
                <p style={{fontSize:"13px"}}>@2021 Doraemon Store, All rights reserved</p>
            </div>
            <div className="f-middle">
                <div className="footer-info">
                    <p><span className="footer-info-title">Địa chỉ</span>: 73/2 Dốc Mơ 1, Gia Tân 1, Thống Nhất, Đồng Nai</p>
                    <p><span className="footer-info-title">Số điện thoại</span>: 1111 111 111</p>
                    <p><span className="footer-info-title">Facebook</span>: Ceci Kim Chi</p>
                    <p><span className="footer-info-title">Email</span>: doraemonstore732@gmail.com</p>
                    <form action="/about">
                        <label for="fname">HOẶC</label><br/><br/>
                        <input  type="text" id="fname" name="fname" value="Nhập email của bạn.."/>
                        <input className="footer-info-button" type="submit" value="GỬI"/>
                    </form>
                </div>
            </div>
            <div className="f-right">
                <div className="footer-map">
                    <img src={map} alt="This is a map" width="400px"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;