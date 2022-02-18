import React from "react";
import "./ProductDetails.css";

class ProducJapantDetails extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="product-detail">
          <img
            src={location.state.pic}
            alt={location.state.name}
            title={location.state.name}
          />
          <div className="product-detail-inf">
            <ul>
              <li className="product-detail-name"><b>Tên sản phẩm:</b> {location.state.name}</li>
              <li className="product-detail-year"><b>Giá sản phẩm:</b> {location.state.price}</li>
              <li className="product-detail-desc"><b>Mô tả: </b>{location.state.desc}</li>
              <p><i>
                *Để đặt hàng hoặc cần thêm thông tin về sản phẩm vui lòng liên hệ qua số 111 111 111 hoặc inbox trực tiếp cho facebook Ceci Kim Chi
                <p className="button-link"><a href="https://www.facebook.com/profile.php?id=100053748583068" target="_blank">INBOX NGAY</a></p>
                </i></p>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProducJapantDetails;
