import { useEffect, useRef, useState } from "react";
import "odometer/themes/odometer-theme-default.css";
import "./About.css";
import travellerMaleImage from "../../assets/traveller-male.png";
import hotelImage from "../../assets/hotel.png";
import cruiseShipImage from "../../assets/cruiseship.png";
import { GiWorld } from "react-icons/gi";
import Odometer from "react-odometerjs";
import { TbUsersGroup, TbBrandBooking } from "react-icons/tb";
import { RiHotelLine } from "react-icons/ri";

const About = () => {
  const [destinations, setDestinations] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [hotels, setHotels] = useState(0);

  const achievementRef = useRef();

  useEffect(() => {
    // use observer to know when a user scroll to this acheivement section
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setDestinations(60);
            setCustomers(809);
            setBookings(8500);
            setHotels(500);
          }, 1000);
        }
      });
    });

    observer.observe(achievementRef.current);
  }, []);

  return (
    <section id="about">
      <div className="section-container">
        <div className="bento-grid">
          <div className="grid-item" data-aos="fade-right" data-aos-delay="700">
            <img src={travellerMaleImage} alt="" />
          </div>
          <div className="grid-item">
            <div className="item" data-aos="fade-up" data-aos-delay="800">
              <img src={hotelImage} alt="" />
            </div>
            <div className="item" data-aos="fade-up" data-aos-delay="1000">
              <img src={cruiseShipImage} alt="" />
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="1000">
          <h3 className="primary">About Us</h3>
          <h2>Who We Are</h2>
          <p className="text-muted">
            At Travins, we believe travel is more than just going places - it's
            about creating memories that last a lifetime. Our mission is to make
            travel planning simple, affordable, and accessible for everyone.
            From flights to accomodations and everything in between, we're here
            to help you every step of the way.
          </p>

          <div className="achievements" ref={achievementRef}>
            <div className="blur achievement">
              <div className="flex-center icon">
                <GiWorld />
              </div>
              <div className="flex-center">
                <Odometer value={destinations} className="title" />
                <h3 className="title">+</h3>
              </div>
              <p className="text-muted">Destinations</p>
            </div>
            <div className="blur achievement">
              <div className="flex-center icon">
                <TbUsersGroup />
              </div>
              <div className="flex-center">
                <Odometer value={customers} className="title" />
                <h3 className="title">+</h3>
              </div>
              <p className="text-muted">Happy Clients</p>
            </div>
            <div className="blur achievement">
              <div className="flex-center icon">
                <TbBrandBooking />
              </div>
              <div className="flex-center">
                <Odometer value={bookings} className="title" />
                <h3 className="title">+</h3>
              </div>
              <p className="text-muted">Bookings</p>
            </div>
            <div className="blur achievement">
              <div className="flex-center icon">
                <RiHotelLine />
              </div>
              <div className="flex-center">
                <Odometer value={hotels} className="title" />
                <h3 className="title">+</h3>
              </div>
              <p className="text-muted">Luxury Hotels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
