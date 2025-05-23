import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import PopularDestinations from "./Components/PopularDestinations/PopularDestinations";
import About from "./Components/About/About";


const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <PopularDestinations />
      <About />
    </>
  );
};

export default App;
