import About from "../../component/Home/About";
import Healthcare from "../../component/Home/Healthcare";
import Hero from "../../component/Home/Hero";
import ChooseUs from "../../component/Home/Chooseus";
import Footerr from "../../component/Home/Footer";
import NavbarHome from "../../component/Shared/Navbar";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <Hero />
      <Healthcare />
      <About />
      <ChooseUs />
      <Footerr />
    </>
  );
};

export default Home;
