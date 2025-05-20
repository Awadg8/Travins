import "./Header.css";
import worldImage from "../../assets/world.svg";
import airplaneImage from "../../assets/airplane.png";
import beachImage from "../../assets/beach.png";
import cityCafeImage from "../../assets/citycafe.png";
import travellerImage from "../../assets/traveller.png";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Partners from "../Partners/Partners";

const Header = () => {
  return (
    <header id="header">
      <div className="world">
        <img src={worldImage} alt="" />
      </div>

      <div className="section-container">
        <div className="grid">
          <div className="column">
            <div className="info">
              <h1 className="heading">
                Explore the World, Your Way With{" "}
                <span className="primary">Travins</span>
              </h1>
              <p className="text-muted sub-heading">
                Book your next adventure with ease. Affordable, reliable, and
                unforgettable travel experiences await.
              </p>
            </div>

            <div className="airplane">
              <img src={airplaneImage} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="bento-grid">
              <div className="flex grid-item">
                <div className="item blur flex rating">
                  <h1>4.5</h1>
                  <div>
                    <div className="stars-container">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStarHalfStroke />
                    </div>
                    <p className="text-muted">
                      <b>1210</b> Reviews
                    </p>
                  </div>
                </div>

                <div className="flex-1 item">
                  <img src={beachImage} alt="" />
                </div>
              </div>

              <div className="flex grid-item">
                <div className="item">
                  <img src={cityCafeImage} alt="" />
                </div>
                <div className="item">
                  <img src={travellerImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Partners />
      </div>
    </header>
  );
};

export default Header;
