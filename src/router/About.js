import React from "react";
import "./About.css";
import ds from "../img/doraemon.png";
import aimg1 from "../img/img-guitar/danA1600.JPG";
import aimg2 from "../img/img-guitar/daydan150.JPG";
import aimg3 from "../img/img-japan/DHC-DHA.JPG";
import aimg4 from "../img/img-japan/raccom-bo.JPG";
import aimg5 from "../img/img-sou/mockhoa-consoi.JPG";
import aimg6 from "../img/img-sou/guong-be.JPG";
import target1 from "../img/sto1.jpeg";
import target2 from "../img/sto2.jpeg";
import target3 from "../img/sto3.jpeg";
import logo from "../img/logo.png";

function About(props) {
  return (
    <div className="about">
      <h2>GIỚi THIỆU</h2>
      <div className="about-part-1">
        <img src={ds} width="250px" />
        <div className="about-part-1-img">
          <img src={aimg1} />
          <img src={aimg2} />
          <img src={aimg3} />
          <img src={aimg4} />
          <img src={aimg5} />
          <img src={aimg6} />
        </div>
      </div>
      <h3>TẠO DỰNG LÊN DORAEMON STORE</h3>
      <div className="about-part-2">
        <img src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/272686823_466915808443368_7912643170323685426_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=U1gSaGqV68AAX-92I8Q&tn=F542LKXcbeaJPId2&_nc_ht=scontent-sin6-3.xx&oh=00_AT92Im5KrbMy4bq4yfjFYBllv_o7utYT_uHe8Aw5ldtyLQ&oe=621406FA"/>
        <p>
          Perhaps you have wondered how predictable machines like computers can
          generate randomness. In reality, most random numbers used in computer
          programs are pseudo-random, which means they are generated in a
          predictable fashion using a mathematical formula. This is fine for
          many purposes, but it may not be random in the way you expect if
          you're used to dice rolls and lottery drawings.
        </p>
      </div>
      <div className="about-part-3">
        <h3>MỤC TIÊU CỦA DORAEMON STORE</h3>
        <p>
          Ghé cửa hàng, bạn sẽ có sự lựa chọn đa dạng về sản phẩm, từ vòng tay,
          vòng cổ, lắc tay lắc chân, cho đến các đồ lưu niệm như cối xay gió, sổ
          tay, móc khoá,... Ngoài ra Doraemon Store cũng kinh doanh các sản phẩm
          đàn guitar Acoustic, Classical, Ukulele và các phụ kiện đi kèm như dây
          đàn loại bộ dây và dây rời, phím đàn, capo, tuner, bao da,... Đặc biệt
          Doraemon Store còn nhận order các sản phẩm mỹ phẩm Nhật Bản, nếu các
          bạn có thể tham khảo tại mục Hàng Nhật Order để xem một vài sản phẩm
          tiêu biểu, hoặc có thể nhắn tin trực tiếp cho facebook Ceci Kim Chi để
          đƯợc order sản phẩm cụ thể hoặc nhận sự tư vấn sản phẩm phù hợp nhất
          với sức khoẻ của mình.
        </p>
        <div className="about-part-3-img">
          <figure class="snip0015">
          <img src={target1} alt="sample38"/>
            <figcaption>
              <h2>Đồ lưu niệm</h2>
            </figcaption>
          </figure>
          <figure class="snip0015">
          <img src={target2} alt="sample38"/>
            <figcaption>
              <h2>Hàng Nhật Bản order</h2>
            </figcaption>
          </figure>
          <figure class="snip0015">
          <img src={target3} alt="sample38"/>
            <figcaption>
              <h2>Phụ kiện guitar</h2>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default About;
