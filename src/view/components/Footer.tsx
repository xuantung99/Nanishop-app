import logo from "../../assets/8c12450df63577e0a584ef986cab9ad1.jpg";
import "../../css/footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div id="footer">
      <div className="info-container">
        <img className="logo" alt="logo" src={logo}></img>
        <div className="about-us info">
          <h6>Về chúng tôi</h6>
          <span onClick={() => navigate("/about-us/intro")}>Giới thiệu</span>
          <span onClick={() => navigate("/about-us/regulation")}>
            Quy chế hoạt động
          </span>
          <span onClick={() => navigate("/about-us/deposit")}>
            Chính sách đặt cọc
          </span>
          <span onClick={() => navigate("/about-us/content")}>
            Chính sách nội dung
          </span>
          <span onClick={() => navigate("/about-us/return")}>
            Chính sách đổi trả hàng
          </span>
          <span onClick={() => navigate("/about-us/shipment")}>
            Chính sách giao hàng
          </span>
          <span onClick={() => navigate("/about-us/security")}>
            Chính sách bảo mật
          </span>
          <span onClick={() => navigate("/about-us/payment")}>
            Chính sách thanh toán
          </span>
          <span onClick={() => navigate("/about-us/bill")}>
            Kiểm tra hóa đơn điện tử
          </span>
          <span onClick={() => navigate("/about-us/data")}>
            Chính sách thu thập và xử lý dữ liệu cá nhân
          </span>
        </div>
        <div className="category info">
          <h6>Danh mục</h6>
          <span>Điện thoại</span>
          <span>Laptop</span>
          <span>Gaming gear</span>
          <span>Phụ kiện</span>
          <span>Thiết bị vp</span>
          <span>Smart home</span>
        </div>
        <div className="post info">
          <h6>Tin tức</h6>
          <span>Tin công nghệ</span>
          <span>Khám phá</span>
          <span>Thủ thuật</span>
          <span>Đánh giá</span>
        </div>
        <div className="contact info">
          <h6>Tổng đài</h6>
          <span>
            <p>Tư vấn</p>
            <p>18001299</p>
          </span>
          <span>
            <p>Trung tâm sửa chữa</p>
            <p>18006928</p>
          </span>
          <span>
            <p>Khiếu nại, góp ý</p>
            <p>18002512</p>
          </span>
        </div>
      </div>
      <div className="other-info">
        <p>
          © 2007 - 2022 Trung tâm Số ĐKKD 0315658429 cấp ngày 21/9/2020 tại Sở
          Kế hoạch Đầu tư TPHCM
        </p>
        <p>
          Địa chỉ: P. Võ Thị Sáu, Q.3, TP. HCM - Số điện thoại: (028)7302792 -
          Email: sale@nanishop.com.vn - Người quản lý nội dung: Cù Xuân Tùng
        </p>
      </div>
    </div>
  );
};
export default Footer;
