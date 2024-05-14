import { useNavigate } from "react-router-dom";
import "../../css/about-us.css";
const AboutUsMenu = () => {
  const navigate = useNavigate();
  return (
    <div id="about-us-menu">
      <p className="title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <span>Nội dung chính</span>
      </p>
      <div onClick={() => navigate("/about-us/intro")}>Giới thiệu</div>
      <div onClick={() => navigate("/about-us/regulation")}>
        Quy chế hoạt động
      </div>
      <div onClick={() => navigate("/about-us/deposit")}>
        Chính sách đặt cọc
      </div>
      <div onClick={() => navigate("/about-us/content")}>
        Chính sách nội dung
      </div>
      <div onClick={() => navigate("/about-us/return")}>
        Chính sách đổi trả hàng
      </div>
      <div onClick={() => navigate("/about-us/shipment")}>
        Chính sách giao hàng
      </div>
      <div onClick={() => navigate("/about-us/security")}>
        Chính sách bảo mật
      </div>
      <div onClick={() => navigate("/about-us/payment")}>
        Chính sách thanh toán
      </div>
      <div onClick={() => navigate("/about-us/bill")}>
        Kiểm tra hóa đơn điện tử
      </div>
      <div onClick={() => navigate("/about-us/data")}>
        Chính sách thu thập và xử lý dữ liệu cá nhân
      </div>
    </div>
  );
};
export default AboutUsMenu;
