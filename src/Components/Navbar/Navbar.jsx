import Logo from "../Logo/Logo";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { services } from "../../data";
import tripImage from "../../assets/trip-map.png";
import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavbar);
    return () => window.removeEventListener("scroll", toggleNavbar);
  }, []);

  return (
    <>
      {showSidebar && (
        <div
          className="sidebar-overlay"
          onClick={() => setShowSidebar(!showSidebar)}
        ></div>
      )}

      <nav className={`flex navbar ${showNavbar && "blur drop"}`}>
        <Logo />

        <ul className={`flex navigation ${showSidebar && "show"}`}>
          <li className="flex-center nav-item" data-aos="fade-left">
            <a href="#header" className="flex nav-link">
              Home
            </a>
          </li>
          <li
            className="flex-center nav-item"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <a href="#services" className="flex nav-link">
              Services
              <FaChevronDown className="chevron-icon" />
            </a>
            <div className="nav-drop">
              <div className="blur drop-wrapper">
                <div className="column left-column">
                  <h2>Our Top Services</h2>
                  <div>
                    {services.map((service, key) => (
                      <div className="flex service" key={key}>
                        <div className="icon">
                          <service.icon />
                        </div>
                        <div>
                          <h4>{service.title}</h4>
                          <p className="text-muted line-clamp-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="column">
                  <p className="text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi sapiente beatae dolor autem, numquam ipsam veniam
                    cumque
                  </p>

                  <a href="#services" className="btn btn-primary">
                    All services
                  </a>
                  <a href="#about" className="btn">
                    About Us
                  </a>
                  <div className="drop-image">
                    <img src={tripImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className="flex-center nav-item"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <a href="#destinations" className="flex nav-link">
              Destinations
            </a>
          </li>
          <li
            className="flex-center nav-item"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <a href="#about" className="flex nav-link">
              About Us
            </a>
          </li>
          <li
            className="flex-center nav-item"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <a href="#testimonials" className="flex nav-link">
              Testimonials
            </a>
          </li>
          <li
            className="flex-center nav-item"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <a href="#contact" className="flex nav-link">
              Contact Us
            </a>
          </li>
        </ul>

        <div
          className="flex-center btn-wrapper"
          data-aos="fade-left"
          data-aos-delay="1100"
        >
          <ThemeToggle />
          <a
            href="#"
            className="btn btn-primary get-started-btn"
            data-aos="fade-left"
            data-aos-delay="1200"
          >
            Get started
          </a>
          <a
            href="#"
            className="btn signin-btn"
            data-aos="fade-left"
            data-aos-delay="1300"
          >
            Sign In
          </a>

          <div
            className="flex-center menu"
            onClick={() => setShowSidebar(!showSidebar)}
            data-aos="fade-left"
            data-aos-delay="1200"
          >
            <TiThMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
