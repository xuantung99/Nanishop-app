// id (string/number), ảnh minh hoạ (img), tiêu đề (string), nội dung (html file), danh mục (11 tin công nghệ, 10 khám phá, 9 thủ thuật, 8 đánh giá), ngày viết (string)
import { TPost } from "../types/TPost";
const postAPI: Array<TPost> = [
  {
    id: 1,
    img: "",
    title: "Dell vừa hé lộ sự thật đáng buồn về chip Intel",
    content: "",
    category: "Tin công nghệ",
    date: "14-5-2024",
  },
  {
    id: 2,
    img: "",
    title:
      "Ảnh thực tế VinFast VF 3 bản thử nghiệm: Mâm, cản khác concept, sẽ mang đi đâm đụng, kiểm tra, còn 4 bước nữa mới tới tay khách hàng",
    content: "",
    category: "Tin công nghệ",
    date: "14-5-2024",
  },
  {
    id: 3,
    img: "",
    title:
      "Google còn chưa công bố, người Nga đã có trên tay Pixel 9 bản hoàn chỉnh: Ba phiên bản, thiết kế viền vuông giống iPhone, chip Tensor G4",
    content: "",
    category: "Tin công nghệ",
    date: "14-5-2024",
  },
  {
    id: 4,
    img: "",
    title:
      "OPPO ra mắt smartphone 5G giá rẻ: Màn hình AMOLED 120Hz siêu sáng, camera 50MP, pin 5500mAh, giá từ 4,5 triệu đồng",
    content: "",
    category: "Tin công nghệ",
    date: "14-5-2024",
  },
  {
    id: 5,
    img: "",
    title: "iOS 17.5 chính thức ra mắt: Sau đây là tất cả những tính năng mới",
    content: "",
    category: "Tin công nghệ",
    date: "14-5-2024",
  },
  {
    id: 6,
    img: "",
    title:
      "‘Vua rác’ David Dương dự chi 32 triệu USD mua 50 xe rác chạy bằng điện",
    content: "",
    category: "Tin công nghệ",
    date: "14-5-2024",
  },
  {
    id: 7,
    img: "",
    title:
      "Đây là pin dự phòng Xiaomi dung lượng 20.000mAh, công suất 210W cực khủng, sạc được cho cả MacBook Pro, giá gần 2 triệu đồng",
    content: "",
    category: "Tin công nghệ",
    date: "14-5-2024",
  },
  {
    id: 8,
    img: "",
    title:
      "Galaxy S25 Ultra sẽ có 'cải lùi' về camera, nhưng người dùng không cần lo lắng",
    content: "",
    category: "Tin công nghệ",
    date: "14-5-2024",
  },
  {
    id: 9,
    img: "",
    title:
      "Trải nghiệm camera vivo X100s: Chụp như máy ảnh, có cả chế độ chụp 4 mùa bằng AI cực kỳ độc lạ",
    content: "",
    category: "Khám phá",
    date: "14-5-2024",
  },
  {
    id: 10,
    img: "",
    title:
      "MediaTek ra mắt chip Dimensity 8250: Nâng cấp AI cho các smartphone tầm trung",
    content: "",
    category: "Khám phá",
    date: "14-5-2024",
  },
  {
    id: 11,
    img: "",
    title:
      "Hiệp hội An ninh mạng quốc gia tổ chức Hội thảo phòng chống lừa đảo trên không gian mạng",
    content: "",
    category: "Khám phá",
    date: "14-5-2024",
  },
  {
    id: 12,
    img: "",
    title: "Người khuyết tật có thể trở thành phi hành gia",
    content: "",
    category: "Khám phá",
    date: "14-5-2024",
  },
  {
    id: 13,
    img: "",
    title:
      "Nghiên cứu mới cho thấy chất độc của cóc sông Colorado có thể trở thành thuốc chống trầm cảm hiệu quả!",
    content: "",
    category: "Khám phá",
    date: "14-5-2024",
  },
  {
    id: 14,
    img: "",
    title:
      "Mạnh nhất trong 20 năm, bão mặt trời năm nay có thể 'nướng cháy' cả điện thoại trên tay: Thực hư ra sao?",
    content: "",
    category: "Khám phá",
    date: "14-5-2024",
  },
  {
    id: 15,
    img: "",
    title:
      "ASUS Vivobook S 14/16 OLED tái định nghĩa laptop đa năng với thiết kế mỏng nhẹ, chip AI và màn hình Lumina OLED",
    content: "",
    category: "Khám phá",
    date: "14-5-2024",
  },
  {
    id: 16,
    img: "",
    title:
      "Mối lương duyên với Leica đã thay đổi smartphone Xiaomi như thế nào?",
    content: "",
    category: "Thủ thuật",
    date: "14-5-2024",
  },
  {
    id: 17,
    img: "",
    title:
      "Ứng dụng điều khiển máy tính từ xa với tốc độ truyền file 12MB/s, chơi game từ xa được",
    content: "",
    category: "Thủ thuật",
    date: "14-5-2024",
  },
  {
    id: 18,
    img: "",
    title:
      "Băng nhóm ransomware Black Basta đã xâm phạm hơn 500 tổ chức trên toàn thế giới",
    content: "",
    category: "Thủ thuật",
    date: "14-5-2024",
  },
  {
    id: 19,
    img: "",
    title:
      "Như trò đùa: Tesla tuyển dụng lại nhân viên vừa bị đuổi chỉ vài hôm trước",
    content: "",
    category: "Thủ thuật",
    date: "14-5-2024",
  },
  {
    id: 20,
    img: "",
    title:
      "Vượt mặt Mercedes, VinFast là đối tác đầu tiên được trang bị hệ thống giải trí hàng đầu trên xe điện của Sony",
    content: "",
    category: "Thủ thuật",
    date: "14-5-2024",
  },
  {
    id: 21,
    img: "",
    title:
      "Như trò đùa: Tesla tuyển dụng lại nhân viên vừa bị đuổi chỉ vài hôm trước",
    content: "",
    category: "Thủ thuật",
    date: "14-5-2024",
  },
  {
    id: 22,
    img: "",
    title:
      "Trải nghiệm camera vivo X100s: Chụp như máy ảnh, có cả chế độ chụp 4 mùa bằng AI cực kỳ độc lạ",
    content: "",
    category: "Đánh giá",
    date: "14-5-2024",
  },
  {
    id: 23,
    img: "",
    title:
      "Con người sẽ ra sao nếu một tiều hành tinh có đường kính 1.000 mét và nặng 100.000 tấn va chạm vào Trái Đất?",
    content: "",
    category: "Đánh giá",
    date: "14-5-2024",
  },
  {
    id: 24,
    img: "",
    title:
      "Phó Thống đốc NHNN: Ngân hàng Nhà nước tiếp tục làm sạch dữ liệu người dùng để chống lừa đảo trên không gian mạng",
    content: "",
    category: "Đánh giá",
    date: "14-5-2024",
  },
  {
    id: 25,
    img: "",
    title:
      "Thượng tướng Lương Tam Quang: Ngăn chặn lừa đảo qua không gian mạng là rất cấp thiết",
    content: "",
    category: "Đánh giá",
    date: "14-5-2024",
  },
  {
    id: 26,
    img: "",
    title:
      "ChatGPT có ứng dụng cho macOS, người dùng Windows cuối năm mới được trải nghiệm",
    content: "",
    category: "Đánh giá",
    date: "14-5-2024",
  },
];
export default postAPI;
