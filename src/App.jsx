import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import PopularDestinations from "./Components/PopularDestinations/PopularDestinations";
import About from "./Components/About/About";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Newletter from "./Components/Newletter/Newletter";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <PopularDestinations />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Newletter />
      <Footer />
    </>
  );
};

export default App;
