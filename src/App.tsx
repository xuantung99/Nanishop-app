import "./css/app.css";
import "./css/header.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./view/homepage/Homepage";
import AboutUs from "./view/about-us/AboutUs";
import Cart from "./view/cart/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
