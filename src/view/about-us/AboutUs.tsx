import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import AboutUsMenu from "./AboutUsMenu";
const AboutUs = () => {
  const { tag } = useParams();
  return (
    <>
      <Header></Header>
      <div id="about-us-container">
        <AboutUsMenu></AboutUsMenu>
      </div>
      <Footer></Footer>
    </>
  );
};
export default AboutUs;
