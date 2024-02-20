import HomeHero from "../../components/HomeHero/HomeHero";
import About from "../../components/about/about";
import Features from "../../components/Featured/featured";
import Explore from "../../components/Explore/explore";
import PopularSection from "../../components/Popular/Popular";
import Testimonial from "../../components/Testimonial/Testimonial";
import BlogSection from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";
import NavbarBottom from "../../components/Navbar/NavbarBottom";

const LandingPage = () => {
  
  return (
    <div className="bg-gray-100">
      <NavbarBottom/>
      <HomeHero/>
      <Features/>
      <PopularSection/>
      <About/>
      <Explore/>
      <Testimonial/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}

export default LandingPage;