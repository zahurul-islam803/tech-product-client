import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TechHaven | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;