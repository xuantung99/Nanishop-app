import logo from "../../assets/8c12450df63577e0a584ef986cab9ad1.jpg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div id="header">
      <div className="about-us">
        <div className="info">
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
              d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
            />
          </svg>
          <span> Tìm hiểu thêm về chúng tôi </span>
          <span>
            <a onClick={() => navigate("/about-us/intro")}> Xem chi tiết</a>
          </span>
        </div>
        <div className="phone">Tư vấn ngay: 1800 1299</div>
      </div>
      <div className="search-logo-cart-container">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="Logo" width="40px" height="40px" />
          <div className="motto">
            <p>NANI SHOP</p>
            <p>Giá rẻ bất ngờ</p>
          </div>
        </div>
        <div className="search">
          <input
            className="search-bar"
            placeholder="Tìm kiếm sản phẩm theo tên, danh mục..."
          />
          <div className="tag-list">
            <span>Iphone 15</span>
            <span>Laptop</span>
            <span>Mac book 12 pro</span>
            <span>Smart Home</span>
            <span>Ghế công thái học</span>
            <span>Phụ kiện</span>
          </div>
        </div>
        <div
          className="cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span>Giỏ hàng</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
