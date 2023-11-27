import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Footer from "../Footer/Footer";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TechHaven | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedProduct></FeaturedProduct>
      <Footer></Footer>
    </div>
  );
};

export default Home;